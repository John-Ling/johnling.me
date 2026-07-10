import Projects from "./projects";
import Blog from "./blog";
import { About } from "./about";

export default function HomeSections() {
  return (
    <div className='flex flex-col items-center max-w-[1920px] mx-auto'>
      <div className='grid auto-rows-auto md:grid-cols-2 mx-auto w-11/12 lg:w-10/12 2xl:w-8/12 gap-y-6 lg:gap-y-14 gap-x-6 text-sm'>
        <About />
        <div className='flex flex-col  lg:block md:col-span-2 lg:col-span-1'>
          <Blog />
        </div>
      </div>
      <Projects />
    </div>
  );
}
