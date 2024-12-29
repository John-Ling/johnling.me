"use client";

import { useEffect } from "react";
import { WhoSection, WhatSection, WhenSection, WhereSection, WhySection } from "@/components/homepage_sections";

const AboutSection = () => {

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

export default AboutSection;