import Image from "next/image";
import myself from "@/public/images/homepage/myself.jpg";

const WhoSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center lg:flex-row p-5 gap-10 lg:w-11/12">
      <div className="basis-1/2 mx-auto">
        <h2 className="text-6xl text-red" style={{animationDelay: "600ms"}}>Who?</h2>
        <h3 className="text-3xl mb-3 mt-3 font-bold">A bit more about me</h3>
        <p className="mb-4">
          When not studying, I&apos;ve always enjoyed building things and picked up programming as a way of doing just that.
          The first version of this site was built way back in 2022 originally as a part of an online course.
        </p>
        <p className="mb-4">
          Since then, however, I&apos;ve kept it around as my own personal place on the internet.
        </p>
        <p>
          Beyond programming and productivity stuff, I enjoy the piano, hobby electronics, homelabbing, journalling and Linux ricing.
          I also have a growing interest in startups and business that I&apos;m currently pursuing.
        </p>
      </div>
      <div className="basis-1/2">
        <Image className="opacity-0 trigger-fade-on-scroll" style={{animationDelay: "0ms"}}  
          src={myself} alt="Picture of the creator of the website"
        />
      </div>
    </section>
  )
}

export default WhoSection;

