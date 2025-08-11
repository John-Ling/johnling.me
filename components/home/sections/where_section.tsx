"use client";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';


const WhereSection = () => {

  const [status, setStatus] = useState<"unsent" | "sending" | "sent">("unsent");

  const [emailBody, setEmailBody] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>("");

  const on_submit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // if (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID === undefined || process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID === undefined) return;
      setStatus("sending");
      setTimeout(() => setStatus("sent"), 3000);
      // await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 
      //                   process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
      //                   {title: emailSubject, name: "user", message: emailBody}, 
      //                   process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY); 
  }

  return (
    <section className="min-h-screen flex flex-col lg:w-11/12 xl:w-3/4 justify-center" id="contact">
      <h2 className="text-6xl lg:text-7xl text-magenta text-center lg:text-left " style={{animationDelay: "600ms"}}>Where?</h2>
      <h3 className="text-3xl mb-3 mt-3 font-bold opacity-0 trigger-fade-on-scroll" style={{animationDelay: "1000ms"}}>(can you find me)</h3>
      <div className="opacity-0 trigger-fade-on-scroll flex flex-col mb-4 text-center lg:text-left" style={{animationDelay: "200ms"}}>
        <h4 className="text-2xl font-bold mb-4">My Socials</h4>
        <div className="flex flex-row justify-center lg:justify-start">
          <div className="transition-all hover:-translate-y-1">
            <a href="https://github.com/John-Ling" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange" 
              style={{animationDelay: "300ms"}}
            > 
              <GitHubIcon sx={{ fontSize: 36}}/>
            </a>
          </div>
          <div className="transition-all hover:-translate-y-1">
            <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange" 
              style={{animationDelay: "200ms"}}
            >
              <LinkedInIcon sx={{ fontSize: 40}}/>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h4 className="text-2xl font-bold mb-4">Leave me a Message</h4>
        <form className="flex flex-col w-full opacity-0 trigger-fade-on-scroll " 
              onSubmit={on_submit} style={{animationDelay: "100ms"}} id="where-form"
        >
          <input disabled={status !== "unsent"} 
                className={` pl-3  outline-none pr-3 pt-2 pb-2 mb-2 
                          bg-grey-card border-2 border-grey-light 
                          ${status !== "unsent" ? "text-muted-white" : "text-white"}`} 
                placeholder="Subject" 
                type="text" 
                content={emailSubject} 
                onChange={(e) => setEmailSubject(e.target.value)}
          />
          <textarea className={`resize-none outline-none p-2 bg-grey-card border-2
                               border-grey-light h-96 mb-2 text-md 
                               ${status !== "unsent" ? "text-muted-white" : ""}`} 
                    disabled={status !== "unsent"}  
                    placeholder='Content' 
                    content={emailBody} onChange={(e) => setEmailBody(e.target.value)} 
          />
          <button disabled={status !== "unsent"} 
                  className={`pl-4 pr-4 pt-1 pb-1 outline-none self-start 
                      bg-grey-card border-2 border-grey-light 
                      ${status !== "unsent" ? "text-muted-white" : ""} 
                      ${ status === "unsent" ? "hover:bg-[#101010] hover:text-[#E0E0E0]}" : ""}`}
            type="submit"
          >
              {status === "sending" ? "Sending" : status === "sent" ? "Sent!" : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default WhereSection;