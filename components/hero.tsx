import { useEffect, useState, useRef } from "react";
import { evolve, conway_populate } from "./ascii-display/animations";
import AsciiDisplay from "./ascii-display/ascii_display";

import "/styles/globals.css";

const Hero = () => {
  const [grid, setGrid] = useState<string[][]>([[]]);
  const [name, setName] = useState<string>("John");
  const [isClient, setIsClient] = useState<boolean>(false);
  const animationRequestID = useRef<number>(0);

  // this supresses hydration error related to ascii display
  useEffect(() => {
    setIsClient(true);
  }, []);

  // animations for ascii display
  useEffect(() => {
    const WIDTH: number = 95;
    const HEIGHT: number = 26;
    let previousGrid: string[][] = conway_populate(WIDTH, HEIGHT);

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / 10;
    let then: number = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);
      let now: number = Date.now();
      let elapsed: number = now - then;

      if (elapsed > fpsInterval) {
        // we've passed the time needed in between frames
        // so we can now update the state of the board
        then = now - (elapsed % fpsInterval);
        let newGrid: string[][] = evolve(previousGrid);
        setGrid(newGrid);
        previousGrid = [...newGrid];
      }
    }

    animationRequestID.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationRequestID.current);
    };
  }, []);

  return (
    <div className="flex items-center h-[calc(100vh-40px)]">
      <div className="p-5 border-2 border-grey-light lg:border-0 bg-grey-dark lg:bg-grey-normal lg:basis-4/12">
        <div className="text-6xl">
          <h1 className="">Hello,</h1>
          <h1>I'm <span className="text-orange">{name}</span></h1>
        </div>
        <div className="mt-12">
          <p className="mb-5">I make things.</p>
          <p className="mb-5">I'm a computer programmer who enjoys staring at screens for most of their day in order to make cool things for themselves and others.</p>
          <p className="hidden mb-5 md:block">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
          <p className="mb-5">I just enjoy exploring different areas of computing and building things with the knowledge I gain.</p>
          <p>That being said, there's an interest in security that I would like to explore.</p>
        </div>
      </div>
      <div className="hidden lg:block text-center m-auto">
        <div className="bg-grey-dark border-2 border-grey-light mt-2 mb-2">
          {isClient ? <AsciiDisplay grid={grid} /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Hero;