import Image from "next/image";
import { motion } from "framer-motion";
import myself from "@/public/images/homepage/myself.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

export default function AboutSection() {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      className='h-3/5 flex flex-col justify-center mx-auto items-center lg:flex-row mt-5 gap-10 w-10/12 md:w-8/12 z-30'
      id='about'
    >
      <div className='basis-1/2'>
        <motion.h3 variants={item} className=' text-3xl mb-3 mt-3 font-bold'>
          A bit more <span className='text-orange'>about me</span>
        </motion.h3>
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
        <Image
          className='max-w-lg opacity-0 animate-fade-up'
          style={{ animationDelay: "800ms" }}
          src={myself}
          alt='Picture of the creator of the website'
        />
      </motion.div>
    </motion.section>
  );
}
