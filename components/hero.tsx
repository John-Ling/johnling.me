import { useEffect, useState, useRef } from "react";
import { evolve, conway_populate, cube_init, cube_next_frame } from "./ascii-display/animations";
import AsciiDisplay from "./ascii-display/ascii_display";
import { AsciiAnimation } from "@/app/common";
import "/styles/globals.css";

const Hero: React.FC<{asciiWidth: number, asciiHeight: number, animation: AsciiAnimation}> = ({asciiWidth, asciiHeight, animation}) => {
  const create = () => {
    const grid: string[] = [];
    for (let i = 0; i < asciiHeight * asciiWidth; i++) {
      grid.push(' ');
    }
    return grid;
  }

  // frame buffer for ascii display
  const [frameBuffer, setFrameBuffer] = useState<string[]>(create);
  const animationRequestID = useRef<number>(0);

  // animations for ascii display
  useEffect(() => {
    let current: string[];
    let nextFrame: (buffer: string[], width: number, height: number) => string[];

    switch (animation) {
      case AsciiAnimation.CONWAY:
        nextFrame = evolve;
        current = conway_populate(asciiWidth, asciiHeight);
        break;
      case AsciiAnimation.CUBE:
        nextFrame = cube_next_frame
        current = cube_init(asciiWidth, asciiHeight);
        break;
    }

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / 10;
    let then: number = Date.now();
    let evolved: string[];
    let now: number;
    let elapsed: number;

    // animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        // we've passed the time needed in between frames
        // so we can now update the state of the board
        then = now - (elapsed % fpsInterval);
        evolved = nextFrame(current, asciiWidth, asciiHeight);
        setFrameBuffer(evolved);
        current = [...evolved];
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
        <div className="text-6xl z-0">
          <h1 className="opacity-0 animate-fade-up [--delay:50ms]" >Hello,</h1>
          <h1 className="opacity-0 animate-fade-up [--delay:150ms]" ><span className="opacity">I&apos;m </span><span className="text-orange">John</span></h1>
        </div>
        <div className="mt-12" >
          <p className="mb-5 opacity-0 animate-fade-up [--delay:300ms]">I make things.</p>
          <p className="mb-5 opacity-0 animate-fade-up [--delay:400ms]">I&apos;m a computer programmer who enjoys staring at screens for most of their day in order to make cool things for themselves and others.</p>
          <p className="hidden mb-5 md:block opacity-0 animate-fade-up [--delay:500ms]">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
          <p className="mb-5 opacity-0 animate-fade-up [--delay:600ms]">I enjoy finding things to learn so I enjoy exploring many different areas of computing.</p>
          <p className="opacity-0 animate-fade-up [--delay:700ms]">That being said, there&apos;s an interest in security that I would like to explore.</p>
        </div>
      </div>
      <div className="hidden lg:block m-auto ">
        <div className="bg-grey-dark border-2 border-grey-light mt-2 mb-2 opacity-0 animate-fade-up [--delay:900ms]">
          <AsciiDisplay frameBuffer={frameBuffer} rowWidth={asciiWidth} />
        </div>
      </div>
    </div>
  )
}

export default Hero;