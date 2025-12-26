import { CanvasSize } from "@/types/hero/CanvasSize";

export function check_special() {
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.has("apple");
  }

  return false;
}

export function init_size(size: "sm" | "md" | "lg") {
  if (typeof window === "undefined") {
    return { width: 65, height: 20, fontSize: 1 } as CanvasSize;
  }

  if (size === "sm") {
    return {
      // restrict width and height otherwise performance issues will happens
      width: Math.max(80, Math.floor(window.innerWidth / 10)),
      height: Math.max(40, Math.floor(window.innerHeight / 37)),
      fontSize: 0.6
    } as CanvasSize;
  }

  return {
    // restrict width and height otherwise performance issues will happens
    width: Math.max(50, Math.floor(window.innerWidth / 11)),
    height: Math.max(40, Math.floor(window.innerHeight / 37)),
    fontSize: 1
  } as CanvasSize;
}
