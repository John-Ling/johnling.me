import Image from "next/image";
import Link from "next/link";

import pc from "@/public/images/homepage/pc.jpg";
import laptop_1 from "@/public/images/homepage/laptop_1.jpg";
import electronics_1 from "@/public/images/homepage/electronics_1.jpg";
import electronics_2 from "@/public/images/homepage/electronics_2.jpg";
import printer from "@/public/images/homepage/printer.jpg"
import server from "@/public/images/homepage/server.jpg";

const WhenSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center lg:flex-row p-5 gap-10">
      {/* left image grid */}
      <div className="hidden lg:w-1/4 md:grid grid-cols-3 gap-2">
        <div className="when-section-picture opacity-0 lg:col-start-2" style={{animationDelay: "300ms"}}>
          <Image loading="eager" className=" w-3/5 lg:w-auto lg:-translate-x-12 lg:-translate-y-12" 
            src={server} 
            alt="The creator's first server setup" 
          />
        </div>
        <div className="when-section-picture opacity-0 row-start-1 col-start-2 lg:row-start-1 lg:col-start-3 w-3/5 lg:w-auto" 
          style={{animationDelay: "200ms"}}
        >
          <Image className="lg:-translate-x-4 lg:translate-y-8" 
            src={pc} alt="The creator's first computer" />
        </div>
        <div className="when-section-picture opacity-0 lg:col-start-2 lg:col-span-2 w-auto" style={{animationDelay: "100ms"}}>
          <Image className="lg:-translate-x-8 lg:translate-y-20" src={laptop_1} alt="Creator's laptop with some nice code"/>
        </div>
      </div>

      {/* content */}
      <div className="lg:w-2/5 trigger-fade-on-scroll" id="when-section">
        <h2 className="text-6xl lg:text-7xl text-blue" style={{animationDelay: "800ms"}}>When?</h2>
        <h3 className="text-3xl mb-3 mt-3 font-bold">Where it all began</h3>
        <p className="mb-5">
          I had taken some introductory Python classes the year before, 
          however my first real project was created in September 2019. It was an automated Kahoot player
          using the Selenium library which while primitive, was something I was proud of as something 
          I built myself. I even tested it in my class much to the confusion of my teacher.
        </p>
        <p className="mb-10">
          I had a lot of fun making it so I&apos;ve continued programming and have created many more projects.
        </p>
        <Link href="/projects" className="no-underline bg-grey-card border-2 border-grey-light p-3 hover:bg-[#101010] hover:text-[#E0E0E0]">See My Projects</Link>
      </div>

      {/* right image grid */}
      <div className="hidden lg:w-1/4 md:grid grid-cols-3 gap-2">
        <div className="when-section-picture opacity-0 lg:col-start-1 lg:col-span-2  lg:w-auto " style={{animationDelay: "400ms"}}>
          <Image className="lg:-translate-x-16" src={electronics_1} alt="More electronics" />
        </div>
        <div className="when-section-picture opacity-0 lg:col-start-2 lg:row-start-2 w-1/2 lg:w-auto" style={{animationDelay: "300ms"}}>
          <Image className="lg:translate-x-4 lg:translate-y-8" src={electronics_2} 
            alt="Some basic electronics the creator built to learn circuits" 
          />
        </div>
        <div className="when-section-picture opacity-0 lg:row-start-3 w-3/5 lg:w-auto" style={{animationDelay: "200ms"}}>
          <Image loading="eager" className="lg:-translate-y-16" src={printer} alt="3D printer the creator owns" />
        </div>
      </div>
    </section>
  )
}

export default WhenSection;