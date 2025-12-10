"use client";
import React, { useEffect, useState } from "react";

import {
  lorenz_cleanup,
  lorenz_init,
  lorenz_next_frame
} from "@/components/ascii-display/animations";

import { check_special, init_size } from "./init_functions";
import AsciiDisplay from "@/components/ascii-display/ascii_display";
import BadApple from "./bad_apple";
import HeroIcons from "@/components/hero/hero_icons";
import useAsciiAnimation from "@/hooks/useAsciiAnimation";

export default function Hero() {
  const [rendered, setRendered] = useState<boolean>(false);
  const [specialEnabled] = useState<boolean>(check_special());
  const { framebuffer: lorenzFramebuffer } = useAsciiAnimation(
    init_size(),
    lorenz_next_frame,
    lorenz_cleanup,
    lorenz_init
  );

  useEffect(() => {
    setRendered(true);
    return;
  }, []);

  if (specialEnabled && rendered) {
    return <BadApple />;
  }

  return (
    <div
      className={`min-h-screen max-w-[1920px] px-5 sm:px-6 lg:px-13 xl:px-25 mx-auto flex items-center justify-center flex-col lg:flex-row`}
    >
      <div className='basis-8/12 max-w-5xl flex flex-col m-2 z-20'>
        <div
          className='text-6xl md:text-5xl z-0 mb-5 opacity-0 animate-fade-up text-center md:text-left'
          style={{ animationDelay: "100ms" }}
        >
          <h1 className='opacity-0 animate-fade-up' style={{ animationDelay: "100ms" }}>
            Hello,
          </h1>
          <h1 className='opacity-0 animate-fade-up' style={{ animationDelay: "150ms" }}>
            I&apos;m{" "}
            <span className='text-orange' style={{ animationDelay: "1500ms" }}>
              John
            </span>
          </h1>
        </div>
        <HeroIcons />
        <p
          className='mt-4 mb-4 opacity-0 animate-fade-up text-center md:text-left'
          style={{ animationDelay: "400ms" }}
        >
          Melbourne-based Full-Stack developer with interests in security, UX and productivity.
        </p>
        <p
          className='mt-4 mb-4 md:m-0 opacity-0 animate-fade-up'
          style={{ animationDelay: "500ms" }}
        >
          I enjoy creating applications to help myself and others work smarter towards their goals,
          reduce stress and maintain focus in a world full of distractions.
        </p>
        <p
          className='hidden md:block opacity-0 animate-fade-up'
          style={{ animationDelay: "600ms" }}
        >
          In short, I like helping people :)
        </p>
        <p className='mt-4 opacity-0 animate-fade-up' style={{ animationDelay: "600ms" }}>
          I&apos;m a final year Computer Science student at the University of Melbourne looking to
          gain practical software development experience whether through a job, internship or
          research assistant position.
        </p>
        <p className='mt-5 opacity-0 animate-fade-up' style={{ animationDelay: "700ms" }}>
          Currently exploring the use of encoder-only language models for detailed emotion
          classification in journal entries.
        </p>
        <p className='mt-5 opacity-0 animate-fade-up' style={{ animationDelay: "800ms" }}>
          Welcome to my website.
        </p>
      </div>

      {/* background ascii display */}
      <div className='hidden md:flex basis-4/5  absolute z-0 top-0'>
        <div className='relative'>
          {rendered && !specialEnabled && (
            <div className='opacity-0 animate-fade-up z-0' style={{ animationDelay: "600ms" }}>
              <AsciiDisplay framebuffer={lorenzFramebuffer} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
