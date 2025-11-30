interface HeroSize {
  width: number;
  height: number;
}

export function check_special() {
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.has("apple");
  }

  return false;
}

export function init_size(specialEnabled: boolean) {
  if (typeof window === "undefined") {
    return { width: 65, height: 20 } as HeroSize;
  }

  if (specialEnabled) {
    return { width: 40, height: 30 } as HeroSize;
  }

  // dynamically set width and height
  return {
    // restrict width and height otherwise performance issues will happens
    width: Math.max(50, Math.floor(window.innerWidth / 15)),
    height: Math.max(40, Math.floor(window.innerHeight / 35))
  } as HeroSize;
}

export function select_animation(specialEnabled: boolean) {
  if (specialEnabled) {
    return "BAPPLE";
  }

  return "LORENZ";
  // return "LORENZ"
  // check visited cookie to either
  // display cube on first visit or a random animation on follow up
  if (typeof document !== "undefined") {
    const visited = document.cookie
      .split("; ")
      .find((row) => row.startsWith("visited="))
      ?.split("=")[1];

    // visited = 0
    if (visited === undefined) {
      document.cookie = "visited=1; Secure; max-age=3600;";
      return "LORENZ";
    }
  }

  const ANIMATIONS: string[] = ["CONWAY", "CUBE", "DONUT", "MATRIX", "LORENZ"];
  // animations to implement
  //TETRIS
  // DVD screensaver
  // windows pipes?

  // pick random animation for ascii display
  const rand: number = Math.floor(Math.random() * ANIMATIONS.length);
  return ANIMATIONS[rand];
}
