"use client";
import { useEffect, useState, useRef } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

import { meslo } from "@/lib/font";

import { conway_next_frame, conway_populate, cube_init, cube_next_frame, 
        donut_next_frame, donut_init, matrix_next_frame, 
        matrix_init, cube_cleanup, conway_cleanup, 
        donut_cleanup, matrix_cleanup, 
        bapple_next_frame,
        bapple_init,
        bapple_cleanup} from "../ascii-display/animations";

import { select_animation, check_special, init_size } from "./init_functions";

import AsciiDisplay from "../ascii-display/ascii_display";
import Secret from "./secret";

import Image from "next/image";
import wires_bottom from "../../public/svg/wires_bottom.svg";

// width and height of ascii display component
interface HeroSize {
  width: number;
  height: number;
}

export default function Hero() {
  const animationRequestID = useRef<number>(0);

  // used to play music for the special
  const audioRef = useRef<HTMLAudioElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [specialEnabled] = useState<boolean>(check_special());
  const [animation] = useState<string>(select_animation(specialEnabled));
  const [size] = useState<HeroSize>(init_size(specialEnabled));
  // frame buffer for ascii display
  const [framebuffer, setFramebuffer] = useState<string[][]>(Array(size.height).fill(null).map(() => Array(size.width).fill(' ')));

  const on_click = () => {
    setPlaying(true);
    audioRef.current?.play();
    return;
  }

  useEffect(() => {
    setRendered(true);
    return;
  }, []);


  // set animations for ascii display
  useEffect(() => {
    let current: string[][] = Array(size.height).fill(null).map(() => Array(size.width).fill(' '));
    let animationSpeed: number = 10;
    let nextFrame: (buffer: string[][], width: number, height: number) => string[][];
    let cleanup: () => void;

    switch (animation) {
      case "CONWAY":
        nextFrame = conway_next_frame;
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
      case "BAPPLE":
        nextFrame = bapple_next_frame
        bapple_init()
        animationSpeed = 30;
        cleanup = bapple_cleanup;
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
        setFramebuffer(next);
        current = [...next];
      }
      animationRequestID.current = requestAnimationFrame(animate);
    } 
  
    const on_visibility_change = () => {
      if (!audioRef.current) return;

      if (document.visibilityState === "hidden") {
        audioRef.current.pause();
        return;
      }

      audioRef.current.play();
      return;
    }

    if (playing) {
      document.addEventListener("visibilitychange", on_visibility_change);
    }
    
    animationRequestID.current = requestAnimationFrame(animate);    

    return () => {
      cleanup();
      cancelAnimationFrame(animationRequestID.current);
    };
  }, [size, animation, specialEnabled, playing ]);

  return (
    <HeroComponent 
      specialEnabled={specialEnabled} 
      rendered={rendered} 
      playing={playing}
      framebuffer={framebuffer} 
      audioRef={audioRef} 
      on_click={on_click} 
    />
  )  
}

interface HeroComponentProps {
  specialEnabled: boolean;
  rendered: boolean;
  playing: boolean;
  framebuffer: string[][];
  audioRef: React.Ref<HTMLAudioElement>;
  on_click: () => void;
};

function HeroComponent({ specialEnabled, rendered, playing, framebuffer, audioRef, on_click}: HeroComponentProps) {
  if (specialEnabled && rendered) {
    return <Secret playing={playing} audioRef={audioRef} framebuffer={framebuffer} on_click={on_click} />
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col lg:flex-row ">
        {/* hero information (left side) */}
        <div className="lg:basis-1/2 xl:basis-5/12 flex flex-col justify-center p-10">
          <div className={`text-6xl z-0 font-bold mb-5 opacity-0 animate-fade-up ${meslo.variable} font-meslo text-center md:text-left`} style={{animationDelay: "100ms"}}>
            <h1 className="opacity-0 animate-fade-up" style={{animationDelay: "100ms"}}>Hello,</h1>
            <h1 className="opacity-0 animate-fade-up" style={{animationDelay: "150ms"}}>
              I&apos;m
              <span className="text-[#2e2e2e] animate-flicker-on" style={{animationDelay: "1500ms"}}> John</span>
            </h1>
          </div>
          <HeroIcons />
          {/* ascii display for tablet view hidden in desktop mode */}
          <div className="relative hidden visible md:block lg:hidden lg:invisible opacity-0 animate-fade-up mt-2 mb-2" style={{animationDelay: "800ms"}}>
            { rendered && !specialEnabled ? 
              <div className="opacity-0 animate-fade-up bg-grey-dark border-2 border-grey-light" style={{animationDelay: "600ms"}}>
                <div className="absolute bg-[repeating-linear-gradient(transparent,transparent_1px,#000000_1px,#000000_2px)] 
                    w-full h-full opacity-40 z-20 m-0 p-0"></div>
                <AsciiDisplay framebuffer={framebuffer} />
              </div>
              :
              null
            }
          </div>
          <p className="mt-4 opacity-0 animate-fade-up text-center md:text-left" style={{animationDelay: "400ms"}}>
            Full Stack web developer with an interest in security and a side of artsy-ness.
          </p>
          <HeroInformation />  
        </div>

        {/* ascii display (right side) */}
        <div className="lg:w-1/2 xl:basis-1/2 flex items-center justify-center">
          <div className="relative bg-grey-dark border-2 hidden lg:block border-grey-light mt-2 mb-2 opacity-0 animate-fade-up z-20" 
            style={{animationDelay: "800ms"}}
          >
            { rendered && !specialEnabled ?         
              <div className="opacity-0 animate-fade-up z-10 bg-grey-dark" style={{animationDelay: "600ms"}}>
                <div className="absolute bg-[repeating-linear-gradient(transparent,transparent_1px,#000000_1px,#000000_2px)] 
                    w-full h-full opacity-40 z-20 m-0 p-0"></div>
                <AsciiDisplay framebuffer={framebuffer} />
              </div>  
              : null
            }
          </div>
          <Image loading="eager" className="hidden lg:block absolute border-0 opacity-0 animate-fade-up top-[42vh] max-w-[47vw] z-10" 
                src={wires_bottom} alt="" style={{animationDelay: "1000ms"}} 
          />
        </div>  
      </div>
    </>
  );
}

const HeroIcons = () => {
  return (
    <div className="opacity-0 animate-fade-up flex flex-row justify-center md:justify-start" style={{ animationDelay: "400ms" }}>
      <div className="opacity-0 animate-fade-up">
        <div className="transition-all hover:-translate-y-1">
          <a href="https://github.com/John-Ling/" target="_blank" rel="noopener" 
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <GitHubIcon sx={{ fontSize: 35 }} />
          </a>
        </div>
      </div>
      <div className="opacity-0 animate-fade-up">
        <div className="transition-all hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/john-ling-721721243/" target="_blank" rel="noopener"
            className="opacity-0 animate-fade-up hover:-translate-y-2" 
            style={{ animationDelay: "500ms" }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
      <div className="opacity-0 animate-fade-up">
        <div className="transition-all hover:-translate-y-1">
          <a href="https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing"
            target="_blank" rel="noopener" className="opacity-0 animate-fade-up hover:-translate-y-2" 
            style={{ animationDelay: "600ms" }}
          >
            <DescriptionIcon sx={{ fontSize: 35 }} />
          </a>
        </div>
      </div>
    </div>
  )
}

const HeroInformation = () => {
 return (
  <div className="mt-6">
    <p className="opacity-0 animate-fade-up" style={{animationDelay: "500ms"}}>
      I use computers to build systems to solve problems and help people.
    </p>
    <p className="opacity-0 animate-fade-up" style={{animationDelay: "600ms"}}>
      Currently, I&apos;m a penultimate Computer Science student at the University of Melbourne majoring in Computing and Software Systems.
    </p>
    <p className="mt-5 opacity-0 animate-fade-up" style={{animationDelay: "700ms"}}>
      I&apos;m looking to gain practical software development experience whether through a job, internship or research assistant position.
    </p>
    <p className="mt-5 opacity-0 animate-fade-up" style={{animationDelay: "800ms"}}>
      Welcome to my website.
    </p>
  </div>
 ) 
}
