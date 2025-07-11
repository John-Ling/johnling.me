"use client";

import { useEffect } from "react";

import WhoSection from "./homepage-sections/who-section/who_section";
import WhatSection from "./homepage-sections/what-section/what_section";
import WhenSection from "./homepage-sections/when-section/when_section";
import WhereSection from "./homepage-sections/where-section/where_section";
import WhySection from "./homepage-sections/why-section/why_section";

import style from "./homepage.module.css";

import { update_fade_entries, update_flicker_entries, options } from "./homepage_observers";

const AboutSection = () => {
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
      <div className={`flex flex-col items-center ${style.homepage}`}>
        <WhoSection />
        <WhatSection />
        <WhenSection />
        <WhereSection />
        <WhySection />
      </div>
    </>
  );
}

export default AboutSection;