interface AsciiDisplayProps {
  framebuffer?: string[][];
  fontSize?: number; // measured in rem
}

export default function AsciiDisplay({ framebuffer, fontSize }: AsciiDisplayProps) {
  return (
    <div className={`text-center overflow-clip whitespace-nowrap select-none z-0 font-mono`}>
      {/* render characters */}
      {framebuffer?.map((row: string[], i: number) => {
        return (
          <div key={i}>
            {row.map((char: string, j: number) => {
              return (
                <span
                  key={j}
                  style={{ fontSize: `${fontSize}rem` }}
                  className='text-grey-muted inline-block whitespace-pre-wrap'
                >
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
