interface AsciiDisplayProps {
  frameBuffer: string[][],
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer }) => {
  return (
    <>
      <div className="text-center p-5 overflow-clip whitespace-nowrap">
        {/* render characters */}
        {frameBuffer.map((row: string[], i: number) => {
          return <div key={i} className="">
            {row.map((char: string, j: number) => {
            return <span key={j} className="text-white inline-block whitespace-pre-wrap">{char}</span>
          })}
          </div>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;