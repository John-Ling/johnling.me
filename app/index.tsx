import Hero from "./(home)/hero/hero";
import HomeSections from "./(home)/sections";

export default function Home() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Hero />
      <HomeSections />
    </div>
  );
}
