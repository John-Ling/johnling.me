interface HeroSize {
    width: number;
    height: number;
  }

export const check_special = () => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.has("apple");
    }

    return false;
}

export const init_size = (specialEnabled: boolean) => { 
    if (typeof window === "undefined") {
      return {width: 65, height: 20} as HeroSize;
    }

    if (specialEnabled) {
      return { width: 40, height: 30 } as HeroSize;
    }

    // dynamically set width and height
    return { width: Math.floor(window.innerWidth / 20), height: Math.floor(window.innerHeight / 32) } as HeroSize;
}


export const select_animation = (specialEnabled: boolean) => {
    if (specialEnabled) {
      return "BAPPLE";
    }
    
    const ANIMATIONS: string[] = ["CONWAY", "CUBE", "DONUT", "MATRIX"]
    // animations to implement
    //TETRIS
    // DVD screensaver
    // windows pipes?

    // pick random animation for ascii display
    const rand: number = Math.floor(Math.random() * ANIMATIONS.length);
    return ANIMATIONS[rand];
}