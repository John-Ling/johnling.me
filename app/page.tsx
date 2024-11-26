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

  const [grid, setGrid] = useState<string[][]>(populate_grid(100, 40));
  const [isClient, setIsClient] = useState<boolean>(false);
  const animationRequestID = useRef<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      <div className="flex min-h-screen">
        <div className="flex flex-col p-5 w-4/12 justify-center mb-40">
          
        </div>
        <div className="flex-1 bg-grey-dark">
          { isClient ? <AsciiDisplay grid={grid}/> : <></>}
        </div>
      </div>
    </>
  );
}
