"use client";
import AsciiDisplay from "../ascii-display/ascii_display";
import { useRef, useEffect } from "react";

interface SecretProps {
  frameBuffer: string[][];
  runAnimation: boolean;
  on_click_: () => void;
}

const Secret: React.FC<SecretProps> = ({frameBuffer, runAnimation, on_click_}) => {
  const audioContext = useRef<AudioContext>(new AudioContext());
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioTrack = useRef<MediaElementAudioSourceNode | null>(null);

  const on_click = () => {
    on_click_();
    if (!audioRef.current) {console.log("Audio ref not working "); return; };
    if (!audioTrack.current) {console.log("Audio track ref not working "); return; };

    audioTrack.current.connect(audioContext.current.destination);
    audioRef.current.play();
  }

  const on_visibility_change = () => {
    if (!audioRef.current) return;
    if (document.visibilityState === "hidden") audioRef.current.pause();
    else audioRef.current.play();
    return;
  }

  useEffect(() => {
    if (!audioRef.current) {console.log("Audio ref is not working"); return};
    audioTrack.current = audioContext.current.createMediaElementSource(audioRef.current);

    // pause music when user leaves tab
    document.addEventListener("visibilitychange", on_visibility_change);
    return (() => {
      document.removeEventListener("visibilitychange", on_visibility_change);
    })
  }, [])

  return (
    <>
      <title>AN EASTER EGG!?</title>
      {
        runAnimation ? 
        <>
          <div className="flex justify-center">
            <AsciiDisplay frameBuffer={frameBuffer} />
          </div>
          <p className="opacity-0 animate-fade-up p-5" style={{animationDelay: "5000ms"}}>
            All rights go to ZUN Soft / Team Shanghai Alice. 
            I do not profit from using this music nor do I claim this music as my own. 
            pls no sue
          </p>
        </>
    : 
          <div className="flex flex-col justify-center items-center min-h-screen w-full">
            <button className="bg-grey-dark p-3 hover:bg-[#101010] hover:text-[#E0E0E0]" onClick={on_click}>
              Play
            </button>
            <p>You might want to turn down your volume</p>
          </div>
      }
      <audio ref={audioRef} src="/bapple.mp3"/>
    </>
  )
}

export default Secret;