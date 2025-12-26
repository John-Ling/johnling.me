import { Canvas } from "@/types/hero/Canvas";
import { CanvasSize } from "@/types/hero/CanvasSize";
import { useEffect, useRef, useState } from "react";

/**
 * Hook for creating the canvas used by an ascii display component
 */
export default function useAsciiAnimation(
  size: CanvasSize | null,
  nextFrame: (buffer: Canvas, width: number, height: number) => Canvas,
  cleanup: () => void,
  initCanvas?: (width: number, height: number) => Canvas,
  pause: boolean = false,
  animationSpeed?: number
) {
  const ANIMATION_SPEED = animationSpeed ?? 15;
  const animationRequestID = useRef<number>(0);

  const [framebuffer, setFramebuffer] = useState<Canvas>(
    Array(size?.height)
      .fill(null)
      .map(() => Array(size?.width).fill(" "))
  );

  useEffect(() => {
    if (!size) {
      return;
    }

    let frame: Canvas = initCanvas
      ? initCanvas(size.width, size.height)
      : Array(size.height)
          .fill(null)
          .map(() => Array(size.width).fill(" "));

    // throttle the animation speed so things actually look good
    const fpsInterval: number = 1000 / ANIMATION_SPEED;
    let next: Canvas;
    let then: number = Date.now();
    let now: number;
    let elapsed: number;

    const animate = () => {
      now = Date.now();
      elapsed = now - then;

      if (elapsed > fpsInterval) {
        // we've passed the time needed in between frames
        // so we can now update the state of the board
        then = now - (elapsed % fpsInterval);
        next = nextFrame(frame, size.width, size.height);
        setFramebuffer(next);
        frame = [...next];
      }

      if (!pause) {
        animationRequestID.current = requestAnimationFrame(animate);
      }
    };

    if (!pause) {
      animationRequestID.current = requestAnimationFrame(animate);
    }

    return () => {
      cleanup();
      cancelAnimationFrame(animationRequestID.current);
    };
  }, [size, pause]);

  return { framebuffer };
}
