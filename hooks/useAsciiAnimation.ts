import { Canvas } from "@/types/hero/Canvas";
import { CanvasSize } from "@/types/hero/CanvasSize";
import { useEffect, useRef, useState } from "react";

interface CommonAnimationProps {
  animationSpeed?: number;
  size: CanvasSize | null;
}

interface StandardAnimationProps extends CommonAnimationProps {
  type: "standard";
  nextFrame: (buffer: Canvas, width: number, height: number) => Canvas;
  cleanup: () => void;
  initCanvas?: (width: number, height: number) => Canvas;
}

interface BadAppleProps extends CommonAnimationProps {
  type: "bapple";
  bappleNextFrame: (buffer: Canvas, width: number, height: number, frameIndex: number) => Canvas;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export type AsciiAnimationProps = StandardAnimationProps | BadAppleProps;

/**
 * Hook for creating the canvas used by an ascii display component
 */
export default function useAsciiAnimation(props: AsciiAnimationProps) {
  const ANIMATION_SPEED = props.animationSpeed ?? 15;
  const animationRequestID = useRef<number>(0);

  const [framebuffer, setFramebuffer] = useState<Canvas>(
    Array(props.size?.height)
      .fill(null)
      .map(() => Array(props.size?.width).fill(" "))
  );

  useEffect(() => {
    if (!props.size) {
      return;
    }

    let frame: Canvas;
    if (props.type === "standard") {
      console.log("[LOG] initialising canvas");
      frame = props.initCanvas
        ? props.initCanvas(props.size.width, props.size.height)
        : Array(props.size.height)
            .fill(null)
            .map(() => Array(props.size!.width).fill(" "));
    } else {
      frame = Array(props.size.height)
        .fill(null)
        .map(() => Array(props.size!.width).fill(" "));
    }

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
        if (props.type === "standard") {
          next = props.nextFrame(frame, props.size!.width, props.size!.height);
        } else {
          // Calculate frame position based on music progress
          const audio = props.audioRef.current;
          let nextFrameIndex = 0;
          if (audio) {
            nextFrameIndex = Math.floor(audio.currentTime * ANIMATION_SPEED);
          }
          next = props.bappleNextFrame(
            frame,
            props.size!.width,
            props.size!.height,
            nextFrameIndex
          );
        }
        setFramebuffer(next);
        frame = next;
      }

      animationRequestID.current = requestAnimationFrame(animate);
    };

    animationRequestID.current = requestAnimationFrame(animate);

    return () => {
      if (props.type === "standard") {
        console.log("[LOG] cleaning up animation");
        props.cleanup();
      }

      cancelAnimationFrame(animationRequestID.current);
    };
  }, [props.size]);

  return { framebuffer };
}
