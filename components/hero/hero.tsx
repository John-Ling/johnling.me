"use client";
import { useEffect, useState, useRef } from "react";
// import JSZip from 'jszip';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

import { evolve, conway_populate, cube_init, cube_next_frame, 
        donut_next_frame, donut_init, matrix_next_frame, 
        matrix_init, cube_cleanup, conway_cleanup, 
        donut_cleanup, matrix_cleanup } from "../ascii-display/animations";

  
import { select_animation, check_special, init_size } from "./init_functions";

import AsciiDisplay from "../ascii-display/ascii_display";
import "/styles/globals.css";

// width and height of ascii display component
interface HeroSize {
  width: number;
  height: number;
}
// specialEnabled doesn't do anything for now ;)
const Hero = () => {
  // frame buffer for ascii display
  const animationRequestID = useRef<number>(0);
  const [rendered, setRendered] = useState<boolean>(false);
  const [animation, ] = useState<string>(select_animation());
  const [specialEnabled, ] = useState<boolean>(check_special());
  const [size, ] = useState<HeroSize>(init_size(specialEnabled))
  const [frameBuffer, setFrameBuffer] = useState<string[][]>(Array(size.height).fill(null).map(() => Array(size.width).fill(' ')));


  // animations for ascii display
  useEffect(() => {
    let current: string[][];
    let animationSpeed: number = 10;
    let nextFrame: (buffer: string[][], width: number, height: number) => string[][];
    let cleanup: () => void;

    switch (animation) {
      case "CONWAY":
        nextFrame = evolve;
        current = conway_populate(size.width, size.height);
        cleanup = conway_cleanup;
        break;
      case "CUBE":
        nextFrame = cube_next_frame
        current = cube_init(size.width, size.height);
        animationSpeed = 12;
        cleanup = cube_cleanup;
        break;
      case "DONUT":
        nextFrame = donut_next_frame;
        current = donut_init(size.width, size.height);
        animationSpeed = 12;
        cleanup = donut_cleanup;
        break;
      case "MATRIX": 
        nextFrame = matrix_next_frame;
        current = matrix_init(size.width, size.height);
        animationSpeed = 12;
        cleanup = matrix_cleanup;
        break;
      default:
        return;
    }

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / animationSpeed;
    let next: string[][];
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
        next = nextFrame(current, size.width, size.height);
        setFrameBuffer(next);
        current = [...next];
      }
      animationRequestID.current = requestAnimationFrame(animate);
    }

    animationRequestID.current = requestAnimationFrame(animate);
    return () => {
      cleanup();
      cancelAnimationFrame(animationRequestID.current);
    };
  }, [size, animation]);

  useEffect(() => {
    setRendered(true);
    return;
  }, []);
  
  useEffect(() => {
    // const load = async () => {
    //   const zip: Response = await fetch("http://localhost:3000/frame.zip");
    //   const binaryContent: Blob = await zip.blob();
    //   const content: ArrayBuffer = await binaryContent.arrayBuffer();

    //   const jsZip = new JSZip();
    //   const file = await jsZip.loadAsync(content);
    //   const data = await file.file("frames.txt")!.async("string");
    //   console.log(data);
    //   return;
    // }

    if (specialEnabled) {
      console.log("Unzipping frames");
      // load();
    }
    return;
  }, [specialEnabled])
  
  return (
    <>
      <div className="flex items-center justify-center flex-col lg:flex-row h-[calc(100vh-40px)]">
        <div className="flex flex-col justify-center p-10 lg:w-1/3">
          <div className="text-6xl z-0 font-bold mb-5 opacity-0 animate-fade-up " style={{animationDelay: "100ms"}}>
            <h1 className="opacity-0 animate-fade-up" style={{animationDelay: "100ms"}}>Hello,</h1>
            <h1 className="opacity-0 animate-fade-up" style={{animationDelay: "200ms"}}>
              I&apos;m
              <span className="text-orange"> John</span>
            </h1>
          </div>
          <HeroIcons/>
          <HeroInformation />  
        </div>
        <div className="m-auto ">
          <div className="bg-grey-dark border-2 hidden lg:block border-grey-light mt-2 mb-2 opacity-0 animate-fade-up" 
            style={{animationDelay: "800ms"}}
          >
            { rendered && !specialEnabled ? 
              <div className="opacity-0 animate-fade-up" style={{animationDelay: "600ms"}}>
                <AsciiDisplay frameBuffer={frameBuffer} />
              </div>
              : <></>
            }
          </div>
        </div>  
    </div>
    </>
  )
}

export default Hero;

const HeroIcons = () => {
  return (
    <div className="opacity-0 animate-fade-up" style={{animationDelay: "400ms"}}>
      <a href="https://github.com/John-Ling/" target="_blank" rel="noopener" className="opacity-0 animate-fade-up" 
        style={{animationDelay: "400ms"}}
      >
        <GitHubIcon sx={{ fontSize: 35}}/>
      </a>
      <a href="https://www.linkedin.com/in/john-ling-721721243/" target="_blank" rel="noopener" 
        className="opacity-0 animate-fade-up" style={{animationDelay: "500ms"}}
      >
        <LinkedInIcon sx={{ fontSize: 40}}/>
      </a>
      <a href="mailto:johnlingbusiness@gmail.com" className="opacity-0 animate-fade-up" style={{animationDelay: "600ms"}}>
        <EmailIcon sx={{ fontSize: 35}}/>
      </a>
      <a href="https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing" 
        target="_blank" rel="noopener" className="opacity-0 animate-fade-up" style={{animationDelay: "700ms"}}>
          <DescriptionIcon sx={{ fontSize: 35}}/>
      </a>
  </div>
  )
}

const HeroInformation = () => {
 return (
  <div className="mt-6">
    <p className="mb-5 opacity-0 animate-fade-up" style={{animationDelay: "400ms"}}>I make things.</p>
    <p className="mb-5 opacity-0 animate-fade-up" style={{animationDelay: "500ms"}}>
      I&apos;m a full-stack developer who enjoys staring at screens for hours 
      to build cool things for themselves and others.
    </p>
    <p className="hidden mb-5 md:block opacity-0 animate-fade-up" style={{animationDelay: "600ms"}}>
      Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.
    </p>
    <p className="mb-5 opacity-0 animate-fade-up" style={{animationDelay: "700ms"}}>
      My projects tend to be web-based, but learning new things is fun so they can vary.
    </p>
  </div>
 ) 
}