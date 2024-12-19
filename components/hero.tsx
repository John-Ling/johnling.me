import { useEffect, useState, useRef } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

import { evolve, conway_populate, cube_init, cube_next_frame, donut_next_frame, donut_init, reset_animations } from "./ascii-display/animations";
import AsciiDisplay from "./ascii-display/ascii_display";
import "/styles/globals.css";

const Hero: React.FC<{ asciiWidth: number, asciiHeight: number, animation: string }> = ({ asciiWidth, asciiHeight, animation }) => {
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
  const [rendered, setRendered] = useState<boolean>(false);

  // animations for ascii display
  useEffect(() => {
    let current: string[];
    let animationSpeed: number = 10;
    let nextFrame: (buffer: string[], width: number, height: number) => string[];

    switch (animation) {
      case "CONWAY":
        nextFrame = evolve;
        current = conway_populate(asciiWidth, asciiHeight);
        break;
      case "CUBE":
        nextFrame = cube_next_frame
        current = cube_init(asciiWidth, asciiHeight);
        animationSpeed = 12;
        break;
      case "DONUT":
        nextFrame = donut_next_frame;
        current = donut_init(asciiWidth, asciiHeight);
        animationSpeed = 12;
        break;
      default:
        return;
    }

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / animationSpeed;
    let next: string[];
    let then: number = Date.now();
    let now: number;
    let elapsed: number;

    // animation loop
    const animate = () => {
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        // we've passed the time needed in between frames
        // so we can now update the state of the board
        then = now - (elapsed % fpsInterval);
        next = nextFrame(current, asciiWidth, asciiHeight);
        setFrameBuffer(next);
        current = [...next];
      }
      animationRequestID.current = requestAnimationFrame(animate);
    }

    animationRequestID.current = requestAnimationFrame(animate);
    return () => {
      reset_animations();
      cancelAnimationFrame(animationRequestID.current);
    };
  }, [asciiWidth, asciiHeight, animation]);

  useEffect(() => {
    setRendered(true);
    return;
  }, [])

  return (
    <>
      <div className="flex items-center justify-center flex-col lg:flex-row h-[calc(100vh-40px)]">
      <div className="flex flex-col justify-center p-10 border-2 border-grey-light lg:border-0 bg-grey-dark lg:bg-grey-normal lg:w-1/3">
        <div className="text-6xl z-0 font-extrabold mb-5 opacity-0 animate-fade-up [--delay:100ms]">
          <h1 className="opacity-0 animate-fade-up [--delay:100ms]" >Hello,</h1>
          <h1 className="opacity-0 animate-fade-up [--delay:200ms]" ><span className="">I&apos;m </span><span className="text-orange">John</span></h1>
        </div>
        <div className="opacity-0 animate-fade-up [--delay:300ms]">
          <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 animate-fade-up [--delay:300ms]" target="_blank" rel="noopener">
            <LinkedInIcon sx={{ fontSize: 40}}></LinkedInIcon>
          </a>
          <a href="https://github.com/John-Ling/" className="opacity-0 animate-fade-up [--delay:400ms]" target="_blank" rel="noopener">
            <GitHubIcon sx={{ fontSize: 35}}></GitHubIcon>
          </a>
          <a href="/" className="opacity-0 animate-fade-up [--delay:500ms]" target="_blank" rel="noopener"><EmailIcon sx={{ fontSize: 35}}></EmailIcon></a>
          <a href="/" className="opacity-0 animate-fade-up [--delay:600ms]" target="_blank" rel="noopener"><DescriptionIcon sx={{ fontSize: 35}}></DescriptionIcon></a>
        </div>
        <div className="lg:hidden">
          { rendered ? <AsciiDisplay frameBuffer={frameBuffer} rowWidth={asciiWidth} /> : <></>}
        </div>
        <div className="mt-6" >
          <p className="mb-5 opacity-0 animate-fade-up [--delay:300ms]">I make things.</p>
          <p className="mb-5 opacity-0 animate-fade-up [--delay:400ms]">I&apos;m a full-stack developer who enjoys staring at screens for hours to build cool things for themselves and others.</p>
          <p className="hidden mb-5 md:block opacity-0 animate-fade-up [--delay:500ms]">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
          <p className="mb-5 opacity-0 animate-fade-up [--delay:600ms]">My projects tend to be web-based, but learning new things is fun so they can vary.</p>
        </div>
      </div>
      <div className="m-auto ">
        <div className="bg-grey-dark border-2 hidden lg:block border-grey-light mt-2 mb-2 opacity-0 animate-fade-up [--delay:700ms]">
          { rendered ? <AsciiDisplay frameBuffer={frameBuffer} rowWidth={asciiWidth} /> : <></>}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Hero;