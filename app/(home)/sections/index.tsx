import AboutSection from "./about_section";
import ProjectSection from "./projects_section";
import BlogAndContactSection from "./blog_and_contact_section";

export default function HomeSections() {
  return (
    <>
      <div className='flex flex-col items-center max-w-[1920px] mx-auto'>
        <AboutSection />
        <ProjectSection />
        <BlogAndContactSection />
      </div>
    </>
  );
}
