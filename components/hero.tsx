import { useEffect, useState, useRef } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

import { evolve, conway_populate, cube_init, cube_next_frame, donut_next_frame, donut_init, reset_animations } from "./ascii-display/animations";
import AsciiDisplay from "./ascii-display/ascii_display";
import FadeIn from "./fade_in";
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
          <FadeIn className="text-6xl z-0 font-extrabold mb-5" delay={100}>
            <FadeIn delay={100} className=""><h1>Hello,</h1></FadeIn>
            <FadeIn delay={200} className=""><h1>I&apos;m <span className="text-orange">John</span></h1></FadeIn>
          </FadeIn>
          <FadeIn className="flex" delay={300}>
            <FadeIn className="" delay={300}>
              <a href="https://www.linkedin.com/in/john-ling-721721243/" target="_blank" rel="noopener">
                <LinkedInIcon sx={{ fontSize: 40}}/>
              </a>
            </FadeIn>
            <FadeIn className="" delay={400}>
              <a href="https://github.com/John-Ling/" target="_blank" rel="noopener">
                <GitHubIcon sx={{ fontSize: 35}}/>
              </a>
            </FadeIn>
            <FadeIn className="" delay={500}>
              <a href="mailto:johnlingbusiness@gmail.com">
                <EmailIcon sx={{ fontSize: 35}}/>
              </a>
            </FadeIn>
            <FadeIn className="" delay={600}>
              <a href="https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing" 
                target="_blank" rel="noopener">
                  <DescriptionIcon sx={{ fontSize: 35}}/>
              </a>
            </FadeIn>
          </FadeIn>
          <div className="lg:hidden">
            { rendered ? <AsciiDisplay frameBuffer={frameBuffer} rowWidth={asciiWidth} /> : <></>}
          </div>
          <div className="mt-6">
            <FadeIn delay={300} className="mb-5"><p>I make things.</p></FadeIn>
            <FadeIn delay={400} className="mb-5">
              <p className="">
                I&apos;m a full-stack developer who enjoys staring at screens for hours 
                to build cool things for themselves and others.
              </p>
            </FadeIn>
            <FadeIn delay={500} className="hidden mb-5 md:block">
              <p className="">
                Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.
              </p>
            </FadeIn>
            <FadeIn delay={600} className="mb-5">
              <p className="">
                My projects tend to be web-based, but learning new things is fun so they can vary.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="m-auto ">
          <FadeIn delay={700} className="bg-grey-dark border-2 hidden lg:block border-grey-light mt-2 mb-2">
            { rendered ? <FadeIn delay={700} className=""><AsciiDisplay frameBuffer={frameBuffer} rowWidth={asciiWidth} /></FadeIn> : <></>}
          </FadeIn>
        </div>
      </div>
    </>
  )
}

export default Hero;