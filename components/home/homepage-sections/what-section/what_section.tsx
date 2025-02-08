import SkillsDisplay from "./skills_display";

const WhatSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-3/4">
      <div 
        className="lg:w-1/2 grid grid-cols-3 md:grid-cols-4 basis-[21/100] justify-center bg-grey-dark border-2
                  border-grey-light order-2 lg:order-1 gap-5 pt-10 pb-10 pr-5 pl-5 opacity-0 trigger-fade-on-scroll text-center"
        id="skills-display"
      > 
        <div className="absolute bg-[repeating-linear-gradient(transparent,transparent_1px,#000000_1px,#000000_2px)] 
          w-full h-full opacity-40 z-20"></div>
        <SkillsDisplay />
      </div>
        <div className="order-1 lg:w-1/2">
        <h2 className="text-5xl text-yellow">What?</h2>
        <h3 className="text-3xl mb-3 mt-3">The tools I use</h3>
        <p className="mb-5">
          I&apos;ve been programming for a while now so I&apos;m used to picking up 
          languages for one-off projects such as C++ or Java. However I would definitely say I&apos;m 
          most comfortable with Python, Javascript and maybe some C.
        </p>
        <p className="mb-5">
          I don&apos;t subscribe to a particular &quot;Tech Stack&quot; since I don&apos;t like limiting myself.
        </p>
        <p>
          In my opinion, the KISS (Keep It Simple Stupid) philosophy is a very valid approach to development 
          so I like to use the right tools rather than the hottest ones.
        </p>
      </div>
    </section>
  )
}

export default WhatSection;