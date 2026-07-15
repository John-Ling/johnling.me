import Projects from "./projects";
import Blog from "./blog";
import { About } from "./about";

export default function HomeSections() {
  return (
    <div className='flex flex-col items-center mx-auto'>
      <div className='grid auto-rows-auto md:grid-cols-2 mx-auto w-11/12 lg:w-10/12 2xl:w-8/12 text-sm'>
        <div className='flex flex-col col-span-2'>
          <About />
          <Blog />
        </div>
      </div>
      <Projects />
    </div>
  );
}
