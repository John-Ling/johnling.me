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

export function init_size() {
  if (typeof window === "undefined") {
    return { width: 65, height: 20 } as HeroSize;
  }

  return {
    // restrict width and height otherwise performance issues will happens
    width: Math.max(50, Math.floor(window.innerWidth / 11)),
    height: Math.max(40, Math.floor(window.innerHeight / 37))
  } as HeroSize;
}

export function select_animation(specialEnabled: boolean) {
  if (specialEnabled) {
    return "BAPPLE";
  }

  return "LORENZ";
}
