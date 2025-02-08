"use client";

import { useEffect } from "react";

import WhoSection from "./homepage-sections/who-section/who_section";
import WhatSection from "./homepage-sections/what-section/what_section";
import WhenSection from "./homepage-sections/when-section/when_section";
import WhereSection from "./homepage-sections/where-section/where_section";
import WhySection from "./homepage-sections/why-section/why_section";

const AboutSection = () => {
  // trigger animations when intersecting
  const update_fade_entries = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {

        // using ids we can set a single trigger to 
        // trigger multiple fade-ins
        // an example of this would be the skills display where when the skills display itself
        // becomes visible we fade all the icons in
        switch(entry.target.id)
        {
          case "skills-display":
            entry.target.classList.add("animate-fade-up");
            document.querySelectorAll(".skill-icon").forEach((element: Element) => {
              element.classList.add("animate-fade-up");
            });  
            break;
          case "where-section":
            document.querySelectorAll(".where-section-picture").forEach((element: Element) => {
              element.classList.add("animate-fade-up");
            });
            break;
          default:
            entry.target.classList.add("animate-fade-up");
            break;
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
    const observer = new IntersectionObserver(update_fade_entries, options);
    const elements = document.querySelectorAll(".trigger-fade-on-scroll");

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