"use client";
import { useEffect, useState, useRef } from "react";
import "/styles/globals.css";
import Link from "next/link";

import { evolve } from "@/components/ascii_display/animations";
import AsciiDisplay from "@/components/ascii_display/ascii_display";

export default function Home() {
  // create and return a grid for ascii grid
  const populate_grid = (width: number, height: number) => {
    let grid: string[][] = [];
    const minCeiled: number = Math.ceil(0);
    const maxFloored: number = Math.floor(3);
    for (let i = 0; i < height; i++)
    {
      let buffer: string[] = [];
      for (let j = 0; j < width; j++)
      {
        let chance: number = Math.floor(
          Math.random() * (maxFloored - minCeiled) + minCeiled
        );
        
        if (chance < 2) {
          buffer.push(' ');
          continue;
        }
        buffer.push('*');
      }
      grid.push(buffer)
    }
    return grid;
  }

  const [grid, setGrid] = useState<string[][]>(populate_grid(110, 34));
  const [isClient, setIsClient] = useState<boolean>(false);
  const animationRequestID = useRef<number>(0);

  // this supresses hydration error related to ascii display
  useEffect(() => {
    setIsClient(true);
  }, []);

  // animations for ascii display
  useEffect(() => {
    let previousGrid: string[][] = [...grid];
    const fpsInterval: number = 1000 / 10;
    let then: number = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);

      // throttle the animation speed so things actually look good
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
    <>
      <div className="flex min-h-screen items-center">
        <div className="hidden lg:flex flex-col pl-5 pt-20 basis-4/12 mb-auto">
          <div className="text-7xl tracking-widest m">
              <h1 className="text-orange ">JOHN</h1>
              <h1 className="">LING</h1>
          </div>
          <div className="mt-5">
            <p className="mb-5">Hello. I'm John and I make things.</p>
            <p className="mb-5">I've done web apps, terminal programs, mobile apps and some embedded/hardware stuff.</p>
            <p className="mb-5">Computers are super interesting (in my opinion) so I study Computer Science at the University of Melbourne.</p>
            <p className="mb-5">Right now I'm an undergrad but I might do a masters who knows.</p>
            <p className="mb-5">While I'd primarily say I'm in web-dev, I have a wide range of interests meaning my projects span many areas in tech.</p>
            <p>That being said, I do have an interest in security that I would like to explore.</p>
          </div>
        </div>
        <div className="hidden lg:block text-center m-auto">
          <div className="bg-grey-dark ">
              { isClient ? <AsciiDisplay grid={grid}/> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}
