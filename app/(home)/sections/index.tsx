"use client";

import { useEffect } from "react";

import WhoSection from "./who_section";
import WhatSection from "./what_section";
import WhenSection from "./when_section";
import WhereSection from "./where_section";
import WhySection from "./why_section";

import { update_fade_entries, update_flicker_entries, options } from "./homepage_observers";

export default function AboutSection() {
  // attach intersection observers for on-scroll animations
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(update_fade_entries, options);
    const fadeElements = document.querySelectorAll(".trigger-fade-on-scroll");

    const flickerObserver = new IntersectionObserver(update_flicker_entries, options);
    const flickerElements = document.querySelectorAll(".trigger-flicker-on-scroll");

    fadeElements.forEach((element: Element) => {
      fadeObserver.observe(element);
    });

    flickerElements.forEach((element: Element) => {
      flickerObserver.observe(element);
    });

    return (() => {
      fadeElements.forEach((element: Element) => {
        fadeObserver.unobserve(element);
      });

      flickerElements.forEach((element: Element) => {
        flickerObserver.unobserve(element);
      })
    })
  });

  return (
    <>
    <div className="flex flex-col items-center max-w-[1920px] mx-auto font-meslo">
        <WhoSection />
        <WhatSection />
        <WhenSection />
        <WhereSection />
        <WhySection />
      </div>
    </>
  );
}
