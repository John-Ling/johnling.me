"use client";
import Image from "next/image";
import { motion, stagger } from "framer-motion";
import myself from "@/public/images/homepage/myself.jpg";

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

export default function About() {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      className='h-4/5 flex flex-col justify-center mx-auto items-center lg:flex-row mt-5 gap-10 w-10/12 md:w-8/12 z-30'
      id='about'
    >
      <div className='basis-1/2 font-fira'>
        <motion.h2
          variants={item}
          className='text-3xl md:text-4xl mb-3 font-serif mt-3 font-bold text-white'
        >
          A Bit More <span className='text-orange'>About Me</span>
        </motion.h2>
        <motion.p variants={item} className='mb-4'>
          When not studying, I&apos;ve always enjoyed building things and picked up programming as a
          way of doing just that. The first version of this site was built way back in 2022
          originally as a part of an online course.
        </motion.p>
        <motion.p variants={item} className='mb-4'>
          Since then, however, I&apos;ve kept it around as my own personal place on the internet.
        </motion.p>
        <motion.p variants={item}>
          Beyond programming, I enjoy the piano, hobby electronics, homelabbing, journalling and
          Linux ricing. I also have a fledgling interest in startups and business that I&apos;m
          currently pursuing.
        </motion.p>
      </div>
      <motion.div variants={item} className='basis-1/2'>
        <Image src={myself} alt='Picture of the creator of the website' />
      </motion.div>
    </motion.section>
  );
}
