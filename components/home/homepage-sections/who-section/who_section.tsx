import Image from "next/image";
import myself from "@/public/images/homepage/myself.jpg";
import style from "../homepage.module.css";

const WhoSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-3/4">
      <div className="lg:w-1/2">
        <h2 className="text-5xl text-red" style={{animationDelay: "600ms"}}>Who?</h2>
        <h3 className="text-3xl mb-3 mt-3">A bit more about me</h3>
        <p className="mb-5">
          Currently based in Australia, I&apos;m studying Computer Science at university.
        </p>
        <p className="mb-5">
          When not studying, I&apos;ve always enjoyed building things and picked up programming as a way of doing so.
        </p>
        <p className="mb-5">
          The first version of this website was built way back in 2022 originally as a 
          part of an online course. Since then, however, I&apos;ve kept it around as my own personal website.
        </p>
        <p>
          Beyond programming, I enjoy the piano, building simple circuits and repairing electronics.
        </p>
      </div>
      <div className="w-3/4 lg:w-1/2">
        <Image className="opacity-0 trigger-fade-on-scroll" style={{animationDelay: "0ms"}}  
          src={myself} alt="Picture of the creator of the website"
        />
      </div>
    </section>
  )
}

export default WhoSection;

