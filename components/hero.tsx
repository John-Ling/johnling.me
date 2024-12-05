import { useEffect, useState, useRef } from "react";
import { evolve, conway_populate } from "./ascii-display/animations";
import AsciiDisplay from "./ascii-display/ascii_display";

import "/styles/globals.css";



const Hero: React.FC<{asciiWidth: number, asciiHeight: number}> = ({asciiWidth, asciiHeight}) => {
  const [grid, setGrid] = useState<string[][]>([[]]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const animationRequestID = useRef<number>(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // animations for ascii display
  useEffect(() => {
    let previousGrid: string[][] = conway_populate(asciiWidth, asciiHeight);

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / 10;
    let then: number = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);
      const now: number = Date.now();
      const elapsed: number = now - then;

      if (elapsed > fpsInterval) {
        // we&apos;ve passed the time needed in between frames
        // so we can now update the state of the board
        then = now - (elapsed % fpsInterval);
        const newGrid: string[][] = evolve(previousGrid);
        setGrid(newGrid);
        previousGrid = [...newGrid];
      }
    }

    animationRequestID.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationRequestID.current);
    };
  }, [asciiWidth, asciiHeight]); 

  return (
    <div className="flex items-center h-[calc(100vh-40px)]">
      <div className="flex flex-col justify-center p-10 border-2 border-grey-light lg:border-0 bg-grey-dark lg:bg-grey-normal lg:w-1/3">
        <div className="text-6xl">
          <h1 className="animate-fade-up">Hello,</h1>
          <h1 className={`${loaded ? "opacity-1" : "opacity-0"} animate-fade-up`} style={{animationDelay: "200ms"}}>I&apos;m <span className="text-orange">John</span></h1>
        </div>
        <div className={`mt-12 ${loaded ? "opacity-1" : "opacity-0"} animate-fade-up`} style={{animationDelay: "400ms", animationDuration: "1s"}}>
          <p className="mb-5">I make things.</p>
          <p className="mb-5">I&apos;m a computer programmer who enjoys staring at screens for most of their day in order to make cool things for themselves and others.</p>
          <p className="hidden mb-5 md:block">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
          <p className="mb-5">I enjoy finding things to learn so I enjoy exploring many different areas of computing.</p>
          <p>That being said, there&apos;s an interest in security that I would like to explore.</p>
        </div>
      </div>
      <div className="hidden lg:block m-auto ">
        <div className="bg-grey-dark border-2 border-grey-light mt-2 mb-2">
          <AsciiDisplay grid={grid} />
        </div>
      </div>
    </div>
  )
}

export default Hero;