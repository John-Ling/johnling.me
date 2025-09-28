"use client";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const WhereSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:w-11/12 xl:w-3/4 justify-center items-center" id="contact">
      <h2 className="text-6xl text-magenta text-center lg:text-left " style={{animationDelay: "600ms"}}>Where?</h2>
      <h3 className="text-3xl mb-3 mt-3 font-bold opacity-0 trigger-fade-on-scroll" style={{animationDelay: "1000ms"}}>(can you find me)</h3>
      <div className="opacity-0 trigger-fade-on-scroll flex flex-col mb-4 text-center lg:text-left" style={{animationDelay: "200ms"}}>
        <div className="flex flex-row justify-center lg:justify-start">
          <div className="transition-all hover:-translate-y-1">
            <a href="https://github.com/John-Ling" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange icon-link" 
              style={{animationDelay: "300ms"}}
            > 
              <GitHubIcon sx={{ fontSize: 72}}/>
            </a>
          </div>
          <div className="transition-all hover:-translate-y-1">
            <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange icon-link" 
              style={{animationDelay: "200ms"}}
            >
              <LinkedInIcon sx={{ fontSize: 80}}/>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-bold mb-4">Leave me a Message</h4>
        <Link className="link" href="mailto:johnlingbusiness@gmail.com">johnlingbusiness@gmail.com</Link>
      </div>
    </section>
  )
}

export default WhereSection;
