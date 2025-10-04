import Image from "next/image";
import Link from "next/link";

import laptop from "@/public/images/homepage/thinkpad.jpg";
import soldering from "@/public/images/homepage/soldering.jpg";
import nixie from "@/public/images/homepage/nixie.png";
import electronics_2 from "@/public/images/homepage/electronics_2.jpg";
import server from "@/public/images/homepage/server.jpg";

const WhenSection = () => {
  return (
    <section className="min-h-screen w-11/12 flex flex-col items-center justify-center lg:flex-row p-5 gap-10">
      <div className="trigger-fade-on-scroll lg:basis-1/2" id="when-section">
        <h2 className="text-6xl text-blue" style={{animationDelay: "800ms"}}>When?</h2> 
        <h3 className="text-3xl mb-3 mt-3 font-bold">How I started building</h3>
        <p className="mb-5">
          I had taken some introductory Python classes the year before, 
          however my first real project was created in September 2019. It was an automated Kahoot player
          using the Selenium library which while primitive, was something I was proud of as something 
          I built myself. I even tested it in my class much to the confusion of my teacher.
        </p>
        <p className="mb-10">
          I had a lot of fun making it so I&apos;ve continued programming and have created many more projects.
        </p>
        <Link href="/projects" className="border-none no-underline rounded-lg  p-3 bg-[#141414] hover:bg-[#101010]">See My Projects</Link>
      </div>

      <div className="hidden lg:basis-1/2 md:grid grid-cols-2 gap-4">
        <div className="when-section-picture mr-10 opacity-0 max-w-80" style={{animationDelay: "400ms"}}>
          <div className="-translate-y-5">
            <Image className="animate-float" src={laptop} alt="My laptop" />
          </div>
        </div>
        <div className="when-section-picture opacity-0 w-52" style={{animationDelay: "400ms"}}>
          <div className="lg:-translate-x-12 translate-y-3">
            <Image className="animate-float-inverse" style={{animationDuration: "2500ms"}} src={nixie} alt="Nixie tubes" />
          </div>
        </div>

       <div className="when-section-picture opacity-0 max-w-64"  style={{animationDelay: "300ms"}}>
        <div className="-translate-x-3">
          <Image loading="eager" className="animate-float-inverse w-80" 
                src={server} 
                  alt="The creator's first server setup" 
              />
        </div>
       </div>
        <div className="when-section-picture opacity-0  col-start-2 w-72" style={{animationDelay: "400ms"}}>
          <div className="lg:-translate-x-10">
            <Image className="animate-float" src={soldering} style={{animationDuration: "3500ms"}} alt="Soldering" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhenSection;