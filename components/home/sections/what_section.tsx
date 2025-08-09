import "/styles/devicon.min.css";
import wires_bottom_2 from "../../../public/svg/wires_bottom_2.svg";
import Image from "next/image";

const WhatSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-3/4 max-w-[1920px]">
      <div className="relative lg:w-1/2 order-2 lg:order-1">
        <Image className="hidden md:block absolute border-0 top-[8vh] z-0 opacity-0 trigger-fade-on-scroll pointer-events-none select-none" src={wires_bottom_2} loading="eager" alt=""/>  
        <div 
        className="grid grid-cols-4 justify-center bg-grey-dark border-2
                  border-grey-light order-2 lg:order-1 gap-5 pt-10 pb-10 pr-5 pl-5 text-center opacity-0 trigger-fade-on-scroll z-50"
        id="skills-display"
        >
          <div className="absolute bg-[repeating-linear-gradient(transparent,transparent_1px,#000000_1px,#000000_2px)] top-0 left-0
                          w-full h-full opacity-20 z-20"></div>
          <SkillsDisplay />
        </div>
      </div>
      
      <div className="order-1 lg:order-2 lg:w-1/2">
        <h2 className="text-6xl lg:text-7xl text-yellow" style={{animationDelay: "800ms"}}>What?</h2>
        <h3 className="text-3xl mb-3 mt-3 font-bold">The tools I use</h3>
        <p className="mb-5">
          I&apos;ve been programming for a while now so I&apos;m used to picking up 
          languages for one-off projects such as C++ or Java. However I would definitely say I&apos;m 
          most comfortable with Python, Javascript (React) and maybe some C.
        </p>
        <p className="mb-5">
          I don&apos;t subscribe to a particular &quot;Tech Stack&quot; since I don&apos;t like limiting myself to a single method of doing things.
        </p>
        <p>
          For me, the KISS (Keep It Simple Stupid) principle is a valid approach to development 
          so I like to use the right tools rather than the hottest ones.
        </p>
      </div>
    </section>
  )
}

export default WhatSection;

const SkillsDisplay = () => {
  interface SkillIcon {
    classInfo: string,
    label: string,
  };

  const skillIcons: SkillIcon[] = [
    {classInfo: "devicon-react-original text-cyan", label: "React"},
    {classInfo: "devicon-firebase-plain text-yellow", label: "Firebase"},
    {classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind"},
    {classInfo: "devicon-nextjs-original-wordmark text-white", label: "NextJS"},
    {classInfo: "devicon-fastapi-plain text-blue", label: "FastAPI"},
    {classInfo: "devicon-docker-plain text-blue", label: "Docker"},
    {classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C"},
    {classInfo: "devicon-vercel-original text-white", label: "Vercel"},
    {classInfo: "devicon-express-original text-white", label: "Express"},
    {classInfo: "devicon-mysql-plain text-blue", label: "MySQL"},
    {classInfo: "devicon-nodejs-plain-wordmark text-green", label: "NodeJS"},
    {classInfo: "devicon-ubuntu-plain text-orange-light", label: "Ubuntu"}
  ];

  return (
    <>
    {/* render skills display */}
    {/* <div className="z-20"> */}
      {skillIcons.map((icon: SkillIcon, i: number) => {
        return (
          <div key={i} className="opacity-0 skill-icon" style={{animationDelay: `${(i + 1) * 100}ms`}}>
            <i className={`${icon.classInfo}  text-5xl md:text-6xl lg:text-7xl flex-1 p-5 `} />
            <p className="text-[#FFFFFF] text-xs md:text-sm text-center m-2 font-bold z-40">{icon.label}</p>
          </div>  
        )
      })}
    {/* </div> */}
    </>
  )
}