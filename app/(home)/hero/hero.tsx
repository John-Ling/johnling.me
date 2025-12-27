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
import HeroIcons from "@/components/hero/hero_icons";
import useAsciiAnimation from "@/hooks/useAsciiAnimation";
import { breakpointSmall, breakpointMedium, breakpointLarge } from "@/hooks/useMediaQuery";
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
  const isDesktop = breakpointLarge();
  const isTablet = breakpointMedium();
  const isMobile = breakpointSmall();
  const size: "lg" | "md" | "sm" = isDesktop ? "lg" : isTablet ? "md" : isMobile ? "sm" : "lg";

  useEffect(() => {
    setCanvasSize(init_size(size));
    setRendered(true);
  }, []);

  const { framebuffer: lorenzFramebuffer } = useAsciiAnimation(
    canvasSize,
    lorenz_next_frame,
    lorenz_cleanup,
    lorenz_init
  );

  if (specialEnabled && rendered) {
    return <BadApple />;
  }

  return (
    <motion.div variants={container} initial='hidden' animate='show'>
      <div
        className={`h-3/5 max-w-[1920px] w-10/12  md:w-8/12 mx-auto flex pt-4 md:pt-24 md:pb-24 justify-start flex-col lg:flex-row relative`}
      >
        <div className='basis-7/12 max-w-5xl flex flex-col z-20'>
          <div className='text-5xl z-0 mb-4 text-left'>
            <motion.h1 variants={item}>Hello,</motion.h1>
            <motion.h1 variants={item}>
              I&apos;m{" "}
              <motion.span variants={item} className='text-orange'>
                John
              </motion.span>
            </motion.h1>
          </div>
          <HeroIcons />
          <motion.p variants={item} className='mt-4 text-left'>
            Melbourne-based full-stack developer with interests in security, UX and productivity.
          </motion.p>
          <motion.p className='mt-4 text-left' variants={item}>
            I&apos;m a final year Computer Science student at the University of Melbourne with prior
            internship experience looking to gain more and improve my skills.
          </motion.p>
          <motion.p variants={item} className='mt-4 text-left'>
            My main interest is in productivity and well-being focused applications that help others
            work smarter, reduce stress and maintain focus in a world designed to erode it.
          </motion.p>
          <motion.p variants={item} className='hidden md:block mt-4 text-left'>
            Currently exploring the use of encoder-only language models for detailed emotion
            classification in journal entries.
          </motion.p>
          <motion.p variants={item} className='hidden md:block mt-4 text-left'>
            Welcome to my website.
          </motion.p>
        </div>
      </div>
      {/* background ascii display */}
      <div className='absolute z-0 top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center'>
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
