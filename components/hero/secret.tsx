import AsciiDisplay from "../ascii-display/ascii_display";

interface SecretInterface {
  playMusic: boolean;
  frameBuffer: string[][];
  audioRef: React.Ref<HTMLAudioElement>;
  handle_click: () => void;
}

const Secret: React.FC<SecretInterface> = ({playMusic, frameBuffer, audioRef, handle_click}) => {
  return (
    <>
    <title>AN EASTER EGG!?</title>
      {
        !playMusic 
        ? 
          <div className="flex flex-col justify-center items-center min-h-screen w-full">
            <button className="bg-grey-dark p-3 hover:bg-[#101010] hover:text-[#E0E0E0]" onClick={handle_click}>
              Play
            </button>
            <p>You might want to turn down your volume</p>
          </div>
        :
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
      }
      <audio ref={audioRef}>
        <source src="/bapple.mp3" type="audio/mpeg"/>
      </audio>
    </>
  )
}

export default Secret;