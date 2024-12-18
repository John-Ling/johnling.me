"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/hero";

import { ANIMATIONS } from "./common";

// images
import myself from "../public/images/myself.jpg";
import pc from "../public/images/pc.jpg";
import laptop_1 from "../public/images/laptop_1.jpg";
import electronics_1 from "../public/images/electronics_1.jpg";
import electronics_2 from "../public/images/electronics_2.jpg";
import printer from "../public/images/printer.jpg"
import server from "../public/images/server.jpg";
import web_design from "../public/images/web_design_is_my_passion.jpg";

import "/styles/devicon.min.css";


export default function Home() {
  const [width, setWidth] = useState<number>(95);
  const [height, setHeight] = useState<number>(26);
  const [animation, setAnimation] = useState<string>("");

  const update_entries = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up");
        observer.unobserve(entry.target);
      }
    })
    return;
  };

  const select_animation = () => {
    // pick random animation for ascii display
    const rand: number = Math.floor(Math.random() * ANIMATIONS.length);
    return ANIMATIONS[rand];
    return "";
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold:  0.5,
  };

  // attach intersection observers for on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(update_entries, options)
    const elements = document.querySelectorAll(".hidden-fade");

    elements.forEach((element: Element) => {
      observer.observe(element);
    })

    return (() => {
      elements.forEach((element: Element) => {
        observer.unobserve(element);
      })
    })
  });


  // dynamically set width and height of ascii display
  useEffect(() => {
    console.log("Resizing use effect");
    const windowWidth: number = window.innerWidth;
    
    let newWidth: number = 95;
    let newHeight: number = 26;
    let newAnimation: string = select_animation();
    // values taken from tailwindcss breakpoint values
    // https://tailwindcss.com/docs/screens
    if (windowWidth >= 1536) { // 2xl
      newWidth = 120;
      newHeight = 30;
    } else if (windowWidth >= 1280) { // xl
      newWidth = 95;
      newHeight = 26;
    } else if (windowWidth >= 1024) { // lg
      newWidth = 95;
      newHeight = 20;
    } else if (windowWidth >= 768) { // md
      newWidth = 80;
      newHeight = 18;
      newAnimation = "CUBE";
    } else if (windowWidth >= 640) { // sm
      newWidth = 50;
      newHeight = 15;
    } else { 
      newWidth = 25;
      newHeight = 15;
    }
    setWidth(newWidth);
    setHeight(newHeight);
    setAnimation(newAnimation);
    return;
  }, [])

  return (
    <>
      <Hero asciiWidth={width} asciiHeight={height} animation={animation}/> 
      <div className="flex flex-col items-center">
        <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-x-10 gap-y-10 lg:w-3/4">
          <div className="lg:w-1/2">
            <h2 className="text-5xl sm:text-orange md:text-green 2xl:text-magenta xl:text-red lg:text-blue">Who?</h2>
            <h3 className="text-3xl mb-3 mt-3">A bit more about me</h3>
            <p className="mb-5">Currently based in Australia, I'm studying Computer Science at university.</p>
            <p className="mb-5">When not studying and trying my best to do my best. I've always enjoyed 
              building things and picked up programming as a way of doing so.
            </p>
            <p className="mb-5">The first version of this website was built way back in 2022 originally as a 
              part of a course. Since then, however, I&apos;ve kept it around as my own personal website.
            </p>
            <p>Beyond programming, I enjoy the piano, building simple circuits and repairing electronics.</p>
          </div>
          <div className="lg:w-1/2">
            <Image  className="opacity-0 hidden-fade [--delay:100ms]" src={myself} alt="Picture of the creator of the website"/>
          </div>
        </section>
        
        <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-x-10 gap-y-10 lg:w-3/4">
          <div className="lg:w-1/2 flex flex-wrap basis-[21/100] justify-center bg-grey-dark border-2 border-grey-light order-2 md:order-1 gap-5 pt-10 pb-10"> 
            <SkillsDisplay />
          </div>
            <div className="order-1 lg:w-1/2">
            <h2 className="text-5xl text-yellow">What?</h2>
            <h3 className="text-3xl mb-3 mt-3">The tools I use</h3>
            <p className="mb-5">I&apos;ve been programming for a while now so I&apos;m used to picking up 
              languages for one-off projects such as C++ or Java.However I would definitely say I&apos;m 
              most comfortable with Python, Javascript and maybe some C.</p>
            <p className="mb-5">I don&apos;t subscribe to a particular &quot;Tech Stack&quot; since I don&apos;t like limiting myself.</p>
            <p className="mb-5">This sentiment is reflected in my opinion on &quot;outdated&quot; tools. Both new and old frameworks have
               strengths and weaknesses.
              </p>
            <p className="mb-5">It can be easy to become fixated on technical details so it's important to view the big picture sometimes. 
              So long as the result accomplishes it&apos;s goal and is decent looking and secure, I don&apos;t have a problem.
            </p>
            <p>In my opinion, the KISS (Keep It Simple Stupid) philosophy is a very valid approach to development 
              so I like to use the right tools rather than the hottest ones.</p>
          </div>
        </section>

        <section className="min-h-screen w-full flex flex-col items-center justify-center lg:flex-row p-5 gap-x-10 gap-y-10">
          <div className="hidden lg:w-1/4 lg:grid grid-cols-3 gap-2">
            <Image loading="eager" className="col-start-2 -translate-x-12 -translate-y-8" src={server} alt="The creator's first server setup"  />
            <Image className="col-start-3 translate-x-4" src={web_design} alt="Fantastic web design"  />
            <Image className="col-start-2 col-span-2 translate-y-7 " src={laptop_1} alt="Creator's laptop with some nice code" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-5xl text-blue">When?</h2>
            <h3 className="text-3xl mb-3 mt-3">Where it all began</h3>
            <p className="mb-5">While I had taken some Python introductory classes the year before, 
              my first real project was created in September 2019. It was an automated kahoot player
              using the Selenium library which while primitive, was something I was proud of since 
              I built myself. I even tested it in my class much to the confusion of my teacher.
            </p>
            <p className="mb-10">I had a lot of fun making it so I&apos;ve continued programming ever since. 
              Also we had a global pandemic the next year which gave me lots of time to learn how to build things
              instead of studying.
            </p>
            <Link href="/projects" className="no-underline bg-grey-dark p-3 hover:bg-[#101010] hover:text-[#E0E0E0]">See My Projects</Link>
          </div>
          <div className="hidden lg:w-1/4 lg:grid grid-cols-3 gap-2">
            <Image loading="eager" className="-translate-y-10 -translate-x-5" src={printer} alt="3D printer the creator owns" />
            <Image className="col-start-2" src={electronics_2} alt="Some basic electronics the creator built to learn circuits" />
            <Image loading="eager" className="translate-y-12" src={pc} alt="Photo of the creator's first computer"  />
            <Image className="row-start-2 col-span-2" src={electronics_1} alt="More electronics"  />
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-5xl text-magenta">Where?</h2>
          <h3 className="text-3xl mb-3 mt-3">(can you find me)</h3>
          <div className="p-5 opacity-0 hidden-fade [--delay:100ms]">
            <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 hidden-fade [--delay:100ms] p-2 no-underline hover:text-[#cdcdcd]">
              <i className="text-6xl md:text-7xl devicon-linkedin-plain"></i>
            </a>
            <a href="https://github.com/John-Ling" className="opacity-0 hidden-fade [--delay:200ms] p-2 no-underline hover:text-[#cdcdcd]">
              <i className="text-6xl md:text-7xl devicon-github-original"></i>
            </a>
          </div>
        </section>

        <section className="min-h-screen flex justify-center items-center">
          <div className="p-5 md:w-1/2">
            <h2 className="text-5xl text-green">Why?</h2>
            <h3 className="text-3xl mb-3 mt-3">Why code?</h3>
            <p className="mb-5">As insincere as it sounds, it&apos;s the truth. I enjoy applying theory and 
              skills I know to build things for myself and help others.</p>
            <p className="mb-5">While I enjoy programming as a hobby for myself first and foremost, 
              my dream is to be able to make something with a positive impact on someone even in a minor way.</p>
            <p className="mb-5">I'm not quite sure what that thing will be but until that happens, 
              I'm more than happy creating things for myself.</p>
            <p>Thanks for visiting. Hope you enjoyed the website :)</p>
          </div>
        </section>
      </div>
    </>
  );
}

const SkillsDisplay = () => {
  interface SkillIcon {
    classInfo: string,
    label: string,
  };

  const skillIcons: SkillIcon[] = [
    {classInfo: "devicon-python-plain text-blue", label: "Python"},
    {classInfo: "devicon-react-original text-cyan", label: "React"},
    {classInfo: "devicon-firebase-plain text-yellow", label: "Firebase"},
    {classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind"},
    {classInfo: "devicon-nextjs-original-wordmark text-white", label: "NextJS"},
    {classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C"},
    {classInfo: "devicon-docker-plain text-blue", label: "Docker"},
    {classInfo: "devicon-nginx-original text-green", label: "NGINX"},
    {classInfo: "devicon-bootstrap-plain text-magenta", label: "Bootstrap"},
    {classInfo: "devicon-mysql-plain text-blue", label: "MySQL"},
    {classInfo: "devicon-nodejs-plain-wordmark text-green", label: "NodeJS"},
    {classInfo: "devicon-ubuntu-plain text-orange", label: "Ubuntu"}
  ];

  return (
    <>
    {/* render skills display */}
    {skillIcons.map((icon: SkillIcon, i: number) => {
      return (
        <div key={i}>
          <i className={`${icon.classInfo}  text-5xl md:text-8xl flex-1 p-5 `} />
          <p className="text-xs md:text-base text-center m-2">{icon.label}</p>
        </div>  
      )
    })}
    </>
  )
}