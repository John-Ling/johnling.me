import SkillsDisplay from "./skills_display"


import Image from "next/image";
import Link from "next/link";

// images
import myself from "../public/images/homepage/myself.jpg";
import pc from "../public/images/homepage/pc.jpg";
import laptop_1 from "../public/images/homepage/laptop_1.jpg";
import electronics_1 from "../public/images/homepage/electronics_1.jpg";
import electronics_2 from "../public/images/homepage/electronics_2.jpg";
import printer from "../public/images/homepage/printer.jpg"
import server from "../public/images/homepage/server.jpg";

export const WhoSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-3/4">
      <div className="lg:w-1/2">
        <h2 className="text-5xl text-red">Who?</h2>
        <h3 className="text-3xl mb-3 mt-3">A bit more about me</h3>
        <p className="mb-5">
          Currently based in Australia, I&apos;m studying Computer Science at university.
        </p>
        <p className="mb-5">
          When not studying, I&apos;ve always enjoyed building things and picked up programming as a way of doing so.
          </p>
        <p className="mb-5">
          The first version of this website was built way back in 2022 originally as a 
          part of an online course. Since then, however, I&apos;ve kept it around as my own personal website.
        </p>
        <p>
          Beyond programming, I enjoy the piano, building simple circuits and repairing electronics.
        </p>
      </div>
      <div className="lg:w-1/2">
        <Image className="opacity-0 trigger-on-scroll" style={{animationDelay: "0ms"}}  
          src={myself} alt="Picture of the creator of the website"
        />
      </div>
    </section>
  )
}

export const WhatSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-3/4">
      <div 
        className="lg:w-1/2 grid grid-cols-3 md:grid-cols-4 basis-[21/100] justify-center bg-grey-dark border-2
                  border-grey-light order-2 lg:order-1 gap-5 pt-10 pb-10 pr-5 pl-5 opacity-0 trigger-on-scroll text-center"
        id="skills-display"
      > 
        <SkillsDisplay />
      </div>
        <div className="order-1 lg:w-1/2">
        <h2 className="text-5xl text-yellow">What?</h2>
        <h3 className="text-3xl mb-3 mt-3">The tools I use</h3>
        <p className="mb-5">
          I&apos;ve been programming for a while now so I&apos;m used to picking up 
          languages for one-off projects such as C++ or Java. However I would definitely say I&apos;m 
          most comfortable with Python, Javascript and maybe some C.
        </p>
        <p className="mb-5">
          I don&apos;t subscribe to a particular &quot;Tech Stack&quot; since I don&apos;t like limiting myself.
        </p>
        <p>
          In my opinion, the KISS (Keep It Simple Stupid) philosophy is a very valid approach to development 
          so I like to use the right tools rather than the hottest ones.
        </p>
      </div>
    </section>
  )
}

export const WhenSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center lg:flex-row p-5 gap-10">
      {/* left image grid */}
      <div className="hidden lg:w-1/4 lg:grid grid-cols-3 gap-2">
        <div className="where-section-picture opacity-0 col-start-2" style={{animationDelay: "200ms"}}>
          <Image loading="eager" className=" -translate-x-12 -translate-y-12" src={server} alt="The creator's first server setup" />
        </div>
        <div className="where-section-picture opacity-0 col-start-3 " style={{animationDelay: "100ms"}}>
          <Image className="-translate-x-4 translate-y-8" 
            src={pc} alt="The creator's first computer" />
        </div>
        <div className="where-section-picture opacity-0 col-start-2 col-span-2 " style={{animationDelay: "300ms"}}>
          <Image className="-translate-x-8 translate-y-20" src={laptop_1} alt="Creator's laptop with some nice code"/>
        </div>
      </div>

      {/* content */}
      <div className="lg:w-1/2 trigger-on-scroll" id="where-section">
        <h2 className="text-5xl text-blue">When?</h2>
        <h3 className="text-3xl mb-3 mt-3">Where it all began</h3>
        <p className="mb-5">
          While I had taken some introductory Python classes the year before, 
          my first real project was created in September 2019. It was an automated kahoot player
          using the Selenium library which while primitive, was something I was proud of as something 
          I built myself. I even tested it in my class much to the confusion of my teacher.
        </p>
        <p className="mb-10">
          I had a lot of fun making it so I&apos;ve continued programming and have created quite a few projects.
        </p>
        <Link href="/projects" className="no-underline bg-grey-dark p-3 hover:bg-[#101010] hover:text-[#E0E0E0]">See My Projects</Link>
      </div>

      {/* right image grid */}
      <div className="hidden lg:w-1/4 lg:grid grid-cols-3 gap-2">
        <div className="where-section-picture opacity-0 col-start-1 col-span-2 " style={{animationDelay: "100ms"}}>
          <Image className="-translate-x-16" src={electronics_1} alt="More electronics" />
        </div>
        <div className="where-section-picture opacity-0 col-start-2 row-start-2" style={{animationDelay: "300ms"}}>
          <Image className="translate-x-4 translate-y-8 " src={electronics_2} 
            alt="Some basic electronics the creator built to learn circuits" 
          />
        </div>
        <div className="where-section-picture opacity-0 row-start-3" style={{animationDelay: "200ms"}}>
          <Image loading="eager" className="-translate-y-16" src={printer} alt="3D printer the creator owns" />
        </div>
      </div>
    </section>
  )
}

export const WhereSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center" id="contact">
      <h2 className="text-5xl text-magenta">Where?</h2>
      <h3 className="text-3xl mb-3 mt-3">(can you find me)</h3>
      <div className="p-5 opacity-0 trigger-on-scroll" style={{animationDelay: "200ms"}}>
        <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 trigger-on-scroll p-2 no-underline hover:text-orange" 
          style={{animationDelay: "200ms"}}
        >
          <i className="text-6xl md:text-7xl devicon-linkedin-plain"></i>
        </a>
        <a href="https://github.com/John-Ling" className="opacity-0 trigger-on-scroll p-2 no-underline hover:text-orange" 
          style={{animationDelay: "300ms"}}
        > 
          <i className="text-6xl md:text-7xl devicon-github-original"></i>
        </a>
      </div>
      <a className="opacity-0 trigger-on-scroll no-underline" style={{animationDelay: "400ms"}} 
        href="mailto:johnlingbusiness@gmail.com"
      >
        johnlingbusiness@gmail.com
      </a>
    </section>
  )
}

export const WhySection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-5 md:w-1/2">
        <h2 className="text-5xl text-green">Why?</h2>
        <h3 className="text-3xl mb-3 mt-3">Why code?</h3>
        <p className="mb-5">
          As insincere as it sounds, it&apos;s the truth. I enjoy applying  the theory and 
          skills I know to build things for myself and help others.
        </p>
        <p className="mb-5">
          While I enjoy programming as a hobby for myself first and foremost, 
          my dream is to be able to create something with a positive impact on someone even in a minor way.
        </p>
        <p className="mb-5">
          I&apos;m not quite sure what that thing will be but until that happens, 
          I&apos;m more than happy making things for myself.
        </p>
        <p>Thanks for visiting. Hope you enjoyed the website :)</p>
      </div>
    </section>
  )
}