import AsciiDisplay from "../ascii-display/ascii_display";

interface SecretProps {
  playing: boolean;
  framebuffer: string[][];
  audioRef: React.Ref<HTMLAudioElement>;
  on_click: () => void;
}

export default function Secret({playing, framebuffer, audioRef , on_click}: SecretProps) {
  return (
    <>
      <title>AN EASTER EGG!?</title>
      {
        playing ? 
        <>
          <div className="flex justify-center">
            <AsciiDisplay framebuffer={framebuffer} />
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