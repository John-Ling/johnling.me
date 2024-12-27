"use client";

import { useEffect } from "react";

import { WhoSection, WhatSection, WhenSection, WhereSection, WhySection } from "@/components/homepage_sections";
import Hero from "@/components/hero";

const HomePage = () => {
  let specialEnabled: boolean = false;

  // doesn't do anything for now ;)
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    specialEnabled = searchParams.has("apple");
  }

  const init_size = () => {
    
    if (typeof window === "undefined") {
      return {width: 20, height: 65};
    }

    if (specialEnabled) {
      return { width: 40, height: 30 };
    }

    // dynamically set width and height
    return { width: Math.floor(window.innerWidth / 16), height: Math.floor(window.innerHeight / 32) };
  }

  const select_animation = () => {
    const ANIMATIONS: string[] = ["CONWAY", "CUBE", "DONUT", "MATRIX"]
    // animations to implement
    //BAPPLE
    //TETRIS
    // DVD screensaver
    // windows pipes?

    // pick random animation for ascii display
    const rand: number = Math.floor(Math.random() * ANIMATIONS.length);
    return ANIMATIONS[rand];
  }

  // trigger animations when intersecting
  const update_entries = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // either attach standard fade in animation or
        // trigger other special animations

        switch(entry.target.id)
        {
          case "skills-display":
            entry.target.classList.add("animate-fade-up");
            document.querySelectorAll(".skill-icon").forEach((element: Element) => {
              element.classList.add("animate-fade-up");
            });  
            break;
          case "where-section":
            console.log("where section");
            document.querySelectorAll(".where-section-picture").forEach((element: Element) => {
              element.classList.add("animate-fade-up");
            });
            break;
          default:
            entry.target.classList.add("animate-fade-up");
        }
        observer.unobserve(entry.target);
      }
    })
    return;
  };

 
  const options = {
    root: null,
    rootMargin: "0px",
    threshold:  0.7, // what portion of the hidden element must be visible before trigger (0.7 = 70%) 
  };

  // attach intersection observers for on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(update_entries, options);
    const elements = document.querySelectorAll(".trigger-on-scroll");

    elements.forEach((element: Element) => {
      observer.observe(element);
    })

    return (() => {
      elements.forEach((element: Element) => {
        observer.unobserve(element);
      })
    })
  });

  return (
    <>
      <Hero size={init_size()} animation={select_animation()} specialEnabled={specialEnabled} />
      <div className="flex flex-col items-center">
        <WhoSection />
        <WhatSection />
        <WhenSection />
        <WhereSection />
        <WhySection />
      </div>
    </>
  );
}

export default HomePage;