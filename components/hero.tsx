import { useEffect, useState, useRef } from "react";
import { evolve, conway_populate } from "./ascii_display/animations";

import AsciiDisplay from "./ascii_display/ascii_display";

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
    let previousGrid: string[][] = conway_populate(110, 34);

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
    <div className="flex min-h-screen md:items-center">
      <div className="flex-col p-5 lg:pt-32 m-5 lg:m-0 border-2 border-grey-light lg:border-0 bg-grey-dark lg:bg-grey-normal lg:basis-4/12 lg:mb-auto lg:min-h-screen">
        <div className="text-6xl lg:text-7xl">
          <h1>Hello,</h1>
          <h1>I'm <span className="text-orange">{name}</span></h1>
        </div>
        <div className="mt-5">
          <p className="mb-5">I make things.</p>
          <p className="mb-5">I've built web apps, terminal programs, mobile apps and some embedded/hardware stuff.</p>
          <p className="hidden mb-5 md:block">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
          <p className="hidden mb-5 md:block">Right now I'm an undergrad might do a masters who knows.</p>
          <p className="mb-5">While I'd primarily say I'm in web-dev, I have a wide range of interests meaning my projects span many areas in tech.</p>
          <p>That being said, there's an interest in security that I would like to explore.</p>
        </div>
      </div>
      <div className="hidden lg:block text-center m-auto">
        <div className="bg-grey-dark border-2 border-grey-light">
          {isClient ? <AsciiDisplay grid={grid} /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Hero;