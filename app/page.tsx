import AboutSection from "@/components/screens/home";
import Hero from "@/components/hero";

const Page = () => {
  let specialEnabled: boolean = false;

  // doesn't do anything for now ;)
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    specialEnabled = searchParams.has("apple");
  }

  const init_size = () => { 
    if (typeof window === "undefined") {
      return {width: 65, height: 20};
    }

    if (specialEnabled) {
      return { width: 40, height: 30 };
    }

    // dynamically set width and height
    return { width: Math.floor(window.innerWidth / 16), height: Math.floor(window.innerHeight / 32) };
  }

  const select_animation = () => {
    const ANIMATIONS: string[] = ["CONWAY", "CUBE", "DONUT", "MATRIX"]
    // animations to implement
    //BAPPLE
    //TETRIS
    // DVD screensaver
    // windows pipes?

    // pick random animation for ascii display
    const rand: number = Math.floor(Math.random() * ANIMATIONS.length);
    return ANIMATIONS[rand];
  }

  return (
    <>
      <Hero size={init_size()} animation={select_animation()} specialEnabled={specialEnabled} />
      <AboutSection />
    </>
  )
}

export default Page;