import Image from "next/image";
import myself from "@/public/images/homepage/myself.jpg";

const WhoSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center lg:flex-row p-5 gap-10 lg:w-11/12  xl:w-4/5">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-3xl mx-auto">
        <h2 className="text-6xl text-red" style={{animationDelay: "600ms"}}>Who?</h2>
        <h3 className="text-3xl mb-3 mt-3 font-bold">A bit more about me</h3>
        <p className="mb-4">
          I&apos;m a Computer Science student at the University of Melbourne. 
        </p>
        <p className="mb-4">
          When not studying, I&apos;ve always enjoyed building things and picked up programming as a way of doing just that.
          The first version of this site was built way back in 2022 originally as a part of an online course.
        </p>
        <p className="mb-4">
          Since then, however, I&apos;ve kept it around as my own personal place on the internet.
        </p>
        <p>
          Beyond programming, I enjoy the piano, hobby electronics and homelabbing.
        </p>
      </div>
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-3xl  mx-auto">
        <Image className="opacity-0 trigger-fade-on-scroll" style={{animationDelay: "0ms"}}  
          src={myself} alt="Picture of the creator of the website"
        />
      </div>
    </section>
  )
}

export default WhoSection;

