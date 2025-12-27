import About from "./about";
import Projects from "./projects";
import BlogAndSkills from "./blog_and_skills";

export default function HomeSections() {
  return (
    <div className='flex flex-col items-center max-w-[1920px] mx-auto'>
      <About />
      <BlogAndSkills />
      <Projects />
    </div>
  );
}
