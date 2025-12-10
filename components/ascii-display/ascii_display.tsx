interface AsciiDisplayProps {
  framebuffer: string[][];
}

export default function AsciiDisplay({ framebuffer }: AsciiDisplayProps) {
  return (
    <div className={`text-center p-2 overflow-clip whitespace-nowrap select-none z-0`}>
      {/* render characters */}
      {framebuffer.map((row: string[], i: number) => {
        return (
          <div key={i}>
            {row.map((char: string, j: number) => {
              return (
                <span key={j} className='text-[#575757] inline-block whitespace-pre-wrap'>
                  {char}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
