import BlogSection from "./blog_section";
import ContactSection from "./contact_section";

export default function BlogAndContactSection() {
  return (
    <div className='h-4/5 flex flex-col md:flex-row mx-auto mt-10 w-10/12 md:w-8/12 z-30'>
      <div className='basis-1/2'>
        <BlogSection />
      </div>
      <div className='basis-1/2'>
        <ContactSection />
      </div>
    </div>
  );
}
