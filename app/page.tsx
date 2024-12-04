"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import myself from "../public/images/myself.jpg";
import Hero from "@/components/hero";
import "/styles/devicon.min.css";

interface SkillIcon {
  classInfo: string,
  label: string,
}

export default function Home() {
  const skillIcons: SkillIcon[] = [
    {classInfo: "devicon-python-plain text-blue", label: "Python"},
    {classInfo: "devicon-react-original text-cyan", label: "React"},
    {classInfo: "devicon-firebase-plain text-yellow", label: "Firebase"},
    {classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind"},
    {classInfo: "devicon-bootstrap-plain text-magenta", label: "Bootstrap"},
    {classInfo: "devicon-nginx-original text-green", label: "NGINX"},
    {classInfo: "devicon-docker-plain text-blue", label: "Docker"},
    {classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C"},
    {classInfo: "devicon-nextjs-plain text-white", label: "NextJS"},
    {classInfo: "devicon-nodejs-plain text-green", label: "NodeJS"},
    {classInfo: "devicon-mysql-plain text-blue", label: "MySQL"},
    {classInfo: "devicon-ubuntu-plain text-orange", label: "Ubuntu"}
  ]

  return (
    <>
      <Hero asciiWidth={95} asciiHeight={26} />
      <div className="flex flex-col m-auto lg:w-3/4 ">
        <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-x-10 gap-y-10">
          <div className="lg:w-1/2">
            <h2 className="text-5xl text-red">Who?</h2>
            <h3 className="text-3xl mb-3 mt-3">A bit more about me</h3>
            <p className="mb-5">Hello there. In case the bright orange lettering wasn't apparent, I'm John.</p>
            <p>I'm a developer who enjoys making things by sinking excessive amounts of time into programming.
            The first version of this website was created way back in 2022 to act as a portfolio to employers.</p>
            <p className="hidden md:block ">It also acts as a personal website, something I feel is dying out as the web becomes more centralised.</p>
            <p className="mt-5">When not writing code, I enjoy the piano, building simple circuits and repairing electronics.</p>
          </div>
          <div className="lg:w-1/2">
            <Image src={myself} alt="Picture of the creator of the website" width={3088} height={2320} />
          </div>
        </section>
        <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-x-10 gap-y-10">
          <div className="lg:w-1/2 flex flex-wrap basis-[21/100] justify-center bg-grey-dark border-2 border-grey-light order-2 md:order-1 gap-y-5 gap-x-5 p-3">
            {skillIcons.map((icon: SkillIcon) => {
              return <SkillIcon classInfo={icon.classInfo} label={icon.label} />
            })}
          </div>
          <div className="order-1 lg:w-1/2">
            <h2 className="text-5xl text-yellow">What?</h2>
            <h3 className="text-3xl mb-3 mt-3">The tools I use</h3>
            <p className="mb-5">I've been programming for a while now so I'm used to picking up languages for one-off projects such as C++ or Java.
            However I would definitely say I'm most comfortable with Python, Javascript and maybe some C.</p>
            <p>I don't exactly subscribe to a particular "Tech Stack".</p>
            <p className="mb-5">In my eyes, a website built using PHP, Bootstrap with some Javascript is just as good as the one using the latest version of React and Tailwind.</p>
            <p className="mb-5">So long as the result is functional, decent looking and secure, I see no problems.</p>
            <p>In my opinion, the KISS (Keep It Simple Stupid) philosophy is a very valid approach to development 
              so I like to use the right tools rather than the hottest ones.</p>
          </div>
        </section>
        <section className="min-h-screen flex">
          <div className="flex-1">
            <h2>Hello There</h2>
          </div>
          <div className="flex-1">
            <h2>Hello There</h2>
          </div>
        </section>
        <section className="min-h-screen flex">
          <div className="flex-1">
            <h2>Hello There</h2>
          </div>
          <div className="flex-1">
            <h2>Hello There</h2>
          </div>
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <div className="p-5 md:w-1/2">
            <h2 className="text-5xl text-green">Why?</h2>
            <h3 className="text-3xl mb-1 mt-1">Why code?</h3>
            <p className="mb-5">As corporate as it sounds, I enjoy applying theory and skills I know to build things for myself and others to assist in their everyday lives. Even if it's in a relatively trivial way.</p>
            <p>Whether it be a Raspberry Pi powered dashboard, facial detection tracking camera systems for hybrid learning, producivity web apps or a compiler for A level students, </p>
            <p className="mb-5">at the end of the day all my projects are made with a desire to help others even in a minor way.</p>
            <p className="mb-5">Just like how electronics and mechanical systems can be used to solve a problem, software is yet another solution with its own unique benefits and drawbacks.</p>
            <p>Hope you enjoyed the website :)</p>
          </div>
        </section>
      </div>

    </>
  );
}

const SkillIcon: React.FC<{classInfo: string, label: string}> = ({classInfo, label}) => {
  return (
    <div>
      <i className={`${classInfo} text-8xl flex-1 p-5 `} />
      <p className="text-center">{label}</p>
    </div>
  )
}