import {
  bapple_cleanup,
  bapple_init,
  bapple_next_frame
} from "@/components/ascii-display/animations";
import useAsciiAnimation from "./useAsciiAnimation";
import { RefObject, useEffect, useState } from "react";

/**
 * Hook to play fucking bad apple on my website
 * @param audioRef
 * @returns
 */
export default function useBadApple(audioRef: RefObject<HTMLAudioElement>) {
  const [playing, setPlaying] = useState<boolean>(false);
  const { framebuffer } = useAsciiAnimation(
    { width: 40, height: 30 },
    bapple_next_frame,
    bapple_cleanup,
    undefined,
    !playing,
    30
  );

  const start_playing = () => {
    setPlaying(true);
    audioRef.current?.play();
    return;
  };

  useEffect(() => {
    const effect = async () => {
      await bapple_init();
    };
    effect();
  }, []);

  useEffect(() => {
    const on_visibility_change = () => {
      if (!audioRef.current) return;

      if (document.visibilityState === "hidden") {
        audioRef.current.pause();
        return;
      }

      audioRef.current.play();
      return;
    };

    if (playing) {
      document.addEventListener("visibilitychange", on_visibility_change);
    }
  }, [playing, audioRef]);

  return { framebuffer, playing, start_playing };
}
