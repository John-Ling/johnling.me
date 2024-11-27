"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";

import "/styles/globals.css";

export default function Home() {
  return (
    <>
      <Hero/>
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center p-10">
        <div className="flex-1">
          <h2 className="text-5xl text-red">Who?</h2>
          <h3 className="text-3xl mb-1 mt-1">A bit more about me</h3>
          <p className="mb-5">Hello there. In case the bright orange lettering wasn't apparent, I'm John.</p>
          <p className="mb-5">I'm a developer who enjoys making things by sinking excessive amounts of time into programming.</p>
          <p>The first version of this website was created way back in 2022 to act as a portfolio to employers.</p>
          <p className="mb-5">It also acts as a personal website something I feel is dying out as the web becomes more centralised.</p>
          <p>When not writing code, I enjoy piano, repairing electronics and building circuits.</p>
          <p>Also Youtube, podcasts but everyone has those hobbies.</p>
        </div>
        <div className="flex-1 p-5">
          <Image src="/images/myself.jpg" alt="Picture of the creator of the website" width={600} height={400}/>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex-1">
          <h2>Hello There</h2>
        </div>
        <div className="flex-1">
          <h2 className="text-5xl text-yellow">What?</h2>
          <h3 className="text-3xl">The tools I use</h3>
          <p>I've been programming for a while now so I'm used to picking up languages for one-off projects such as C++ or Java.</p>
          <p>However I would definitely say I'm most comfortable with Python, Javascript and maybe some C.</p>
          <p>I don't exactly subscribe to a particular "Tech Stack".</p>
          <p>In my eyes, a website built using PHP, Bootstrap with some Javascript is just as good as the one using the latest version of React and Tailwind.</p>
          <p className="mb-5">So long as the result is functional, decent looking and relatively secure, I see no problems.</p>
          <p>In my opinion, the KISS (Keep It Simple Stupid) philosophy is a very valid approach to development so I like to use the right tools rather than the hottest ones.</p>
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
    </>
  );
}
