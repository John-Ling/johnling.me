import Projects from "./projects";
import Blog from "./blog";
import Image from "next/image";
import myself_vertical from "@/public/images/homepage/myself.jpg";
import nixie from "@/public/images/homepage/nixie.png";
import peking from "@/public/images/homepage/peking.jpg";
import study from "@/public/images/homepage/study.jpg";

export default function HomeSections() {
  return (
    <div className='flex flex-col items-center max-w-[1920px] mx-auto'>
      <div className='grid auto-rows-auto md:grid-cols-2 mx-auto w-11/12 lg:w-11/12 2xl:w-9/12 md:w-9/12 gap-y-6 lg:gap-y-14 gap-x-6'>
        <div>
          <h2 className='text-3xl md:text-4xl mb-3 font-serif mt-3 font-bold text-white'>
            A Bit More <span className='text-orange'>About Me</span>
          </h2>
          <p className='mb-4'>
            Currently, I&apos;m a final year Computer Science student at the University of
            Melbourne. I built this website back in 2022 as part of an online course.
          </p>
          <p className='mb-4'>
            Since then, however, I&apos;ve kept it around as my own personal place on the internet.
          </p>
          <p>
            Beyond programming, I enjoy the piano, hobby electronics, homelabbing, cooking and Linux
            ricing.
          </p>
          <p className='lg:hidden block mt-4 text-left'>
            Currently re-implementing Trello to allow using it directly from my browser&apos;s
            homepage.
          </p>
        </div>

        {/* Photos */}
        <div className='lg:row-span-2'>
          {/* Desktop Layout */}
          <div className='hidden lg:grid grid-cols-3 grid-rows-2 gap-3'>
            <div className='relative overflow-hidden col-span-2'>
              <Image
                src={myself_vertical}
                className='h-auto'
                alt='Picture of the creator of the website'
              />
            </div>
            <div className='relative overflow-hidden'>
              <Image src={nixie} alt='Dog' className='w-60 h-auto' fill />
            </div>
            <div className='relative overflow-hidden'>
              <Image src={peking} alt='peking duck' className='h-auto w-60' fill />
            </div>
            <div className='relative overflow-hidden col-span-2'>
              <Image src={study} alt='studying' className='h-auto' width={3042} height={4032} />
            </div>
          </div>

          {/* Medium / tablet layout */}
          <div className='hidden lg:hidden md:grid md:grid-cols-1 gap-3'>
            <div className='relative'>
              <Image
                src={myself_vertical}
                className='block lg:hidden'
                alt='Picture of the creator of the website'
              />
            </div>
            <div className='flex lg:hidden gap-3'>
              <div className='relative flex-1'>
                <Image src={peking} alt='peking duck' className='h-auto w-52' />
              </div>
              <div className='relative flex-1'>
                <Image src={nixie} alt='nixie tubes' className='h-auto' fill />
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className='flex flex-col md:hidden'>
            <Image
              src={myself_vertical}
              className='block lg:hidden'
              alt='Picture of the creator of the website'
            />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center lg:block md:col-span-2 lg:col-span-1'>
          <Blog />
        </div>
      </div>
      <Projects />
    </div>
  );
}
