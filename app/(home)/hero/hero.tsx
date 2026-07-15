"use client";
import React, { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";

import {
  lorenz_cleanup,
  lorenz_init,
  lorenz_next_frame
} from "@/components/ascii-display/animations";

import { check_special, init_size } from "./utils";
import AsciiDisplay from "@/components/ascii-display/ascii_display";
import BadApple from "./bad_apple";
import HeroContactDetails from "@/components/hero/hero_contact_details";
import useAsciiAnimation from "@/hooks/useAsciiAnimation";
import { breakpointSmall, breakpointMedium, breakpointLargeX } from "@/hooks/useMediaQuery";
import { CanvasSize } from "@/types/hero/CanvasSize";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1)
    }
  }
};

const item = {
  hidden: { opacity: 0, transform: "translateY(8px)" },
  show: { opacity: 1, transform: "translateY(0px)" }
};

export default function Hero() {
  const [rendered, setRendered] = useState<boolean>(false);
  const [canvasSize, setCanvasSize] = useState<CanvasSize | null>(null);
  const [specialEnabled] = useState<boolean>(check_special());
  const isDesktop = breakpointLargeX();
  const isTablet = breakpointMedium();
  const isMobile = breakpointSmall();
  const size: "lg" | "md" | "sm" = isDesktop ? "lg" : isTablet ? "md" : isMobile ? "sm" : "lg";

  useEffect(() => {
    setCanvasSize(init_size(size));
    setRendered(true);
  }, []);

  const { framebuffer: lorenzFramebuffer } = useAsciiAnimation({
    type: "standard",
    size: canvasSize,
    nextFrame: lorenz_next_frame,
    cleanup: lorenz_cleanup,
    initCanvas: lorenz_init
  });

  if (specialEnabled && rendered) {
    return <BadApple />;
  }

  return (
    <motion.div variants={container} initial='hidden' animate='show'>
      <div className='lg:min-h-screen w-11/12 lg:w-10/12 2xl:w-7/12 mx-auto mt-10 mb-10 lg:mb-0 flex justify-start items-center lg:flex-row'>
        <div className=' lg:basis-7/12 2xl:basis-6/12 max-w-5xl  flex flex-col z-20 lg:-translate-y-40'>
          <div className='text-6xl md:text-[5rem] z-0 text-left font-serif'>
            <motion.h1 variants={item} className='m-0 pb-2 leading-none'>
              <motion.span variants={item} className='m-0 p-0 leading-none'>
                John
              </motion.span>{" "}
              <motion.span variants={item} className='text-orange m-0 p-0 leading-none'>
                Ling
              </motion.span>
            </motion.h1>
          </div>
          <HeroContactDetails />
          <div className='text-sm'>
            <motion.p variants={item} className='mt-4 text-left'>
              Melbourne-based, full-stack developer with interests in visual design and low-level
              systems.
            </motion.p>
            <motion.p variants={item} className='hidden md:block mt-4 text-left'>
              Currently, I&apos;m trying to make a browser extension with Svelte!
            </motion.p>
            <motion.p variants={item} className='mt-4 text-left'>
              Welcome to my website.
            </motion.p>
          </div>
        </div>
      </div>
      {/* background ascii display */}
      <div className='hidden lg:flex absolute z-0 top-0 left-1/2 transform -translate-x-1/2 w-full justify-center'>
        <div className='relative'>
          {rendered && !specialEnabled && (
            <motion.div variants={item} className='z-0'>
              <AsciiDisplay fontSize={canvasSize?.fontSize} framebuffer={lorenzFramebuffer} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
