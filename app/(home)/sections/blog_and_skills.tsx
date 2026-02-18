import Blog from "./blog";
import Skills from "./skills";

export default function BlogAndSkills() {
  return (
    <div className='h-4/5 flex flex-col lg:flex-row mx-auto mt-10 w-10/12 md:w-9/12 z-30 gap-4'>
      <div className='basis-1/2'>
        <Blog />
      </div>
      <div className='basis-1/2 '>
        <Skills />
      </div>
    </div>
  );
}
