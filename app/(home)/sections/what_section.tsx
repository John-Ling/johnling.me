import "/styles/devicon.min.css";
import wires_bottom_2 from "../../../public/svg/wires_bottom_2.svg";
import Image from "next/image";

const WhatSection = () => {
  return (
    <section className='min-h-screen flex flex-col items-center gap-10 mt-5 lg:mt-0 px-5 sm:px-6 lg:px-13 xl:px-25 lg:flex-row lg:w-10/12 '>
      <div className='relative order-2 lg:order-1 w-full lg:basis-1/2'>
        <SkillsDisplay />
      </div>

      <div className='order-1 lg:order-2 lg:basis-1/2'>
        <h2 className='text-6xl text-yellow font-caskaydiaBold' style={{ animationDelay: "800ms" }}>
          What?
        </h2>
        <h3 className='text-3xl mb-3 mt-3 font-caskaydiaBold'>The tools I use</h3>
        <p className='mb-5'>
          I&apos;m not a tech evangelist nor a fanatic. I don&apos;t subscribe to a particular
          &quot;Tech Stack&quot; since I don&apos;t like limiting myself to a single method of doing
          things. In my opinion, you should always be open to learning more to prevent stagnation.
          That discomfort you feel about not knowing something is crucial for growth.
        </p>
        <p>
          For me, the KISS (Keep It Simple Stupid) principle is a valid approach to development so I
          prefer to use the right tools rather than the hottest ones.
        </p>
      </div>
    </section>
  );
};

export default WhatSection;

const SkillsDisplay = () => {
  interface SkillIcon {
    classInfo: string;
    label: string;
  }

  const skillIcons: SkillIcon[] = [
    { classInfo: "devicon-nextjs-original-wordmark text-white", label: "NextJS" },
    { classInfo: "devicon-firebase-plain text-yellow", label: "Firebase" },
    { classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind" },
    { classInfo: "devicon-fastapi-plain text-blue", label: "FastAPI" },
    { classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C" },
    { classInfo: "devicon-vercel-original text-white", label: "Vercel" },
    { classInfo: "devicon-angularjs-plain text-red", label: "Angular" },
    { classInfo: "devicon-docker-plain text-blue", label: "Docker" },
    { classInfo: "devicon-mongodb-plain text-green", label: "MongoDB" },
    { classInfo: "devicon-amazonwebservices-plain-wordmark text-yellow", label: "AWS" },
    { classInfo: "devicon-mysql-plain text-blue", label: "MySQL" },
    { classInfo: "devicon-sass-original text-red", label: "SASS" }
  ];

  return (
    <>
      <Image
        className='hidden md:block absolute border-0 lg:-bottom-[30%] z-0 opacity-0 trigger-fade-on-scroll pointer-events-none select-none'
        src={wires_bottom_2}
        loading='eager'
        alt=''
      />
      <div
        className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 justify-center bg-grey-dark border-4
                  border-grey-light order-2 lg:order-1 pt-10 pb-10 pr-5 pl-5 text-center opacity-0 trigger-fade-on-scroll z-50'
        id='skills-display'
      >
        <div
          className='absolute bg-[repeating-linear-gradient(transparent,transparent_2px,#000000_2px,#000000_4px)] top-0 left-0
                          w-full h-full opacity-10 z-20 animate-scanlines'
          style={{ backgroundSize: "100% 200px" }}
        ></div>
        {skillIcons.map((icon: SkillIcon, i: number) => {
          return (
            <div
              key={i}
              className='opacity-0 skill-icon '
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <>
                <i
                  className={`${icon.classInfo} text-center text-5xl md:text-7xl lg:text-6xl flex-1 animate-float`}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                />
                <p className='text-xs md:text-sm text-center m-2 font-bold z-40 select-none'>
                  {icon.label}
                </p>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
};
