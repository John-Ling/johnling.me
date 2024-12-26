interface AsciiDisplayProps {
  frameBuffer: string[][],
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer }) => {
  return (
    <>
      <div className="text-center p-5">
        {/* render characters */}
        {frameBuffer.map((row: string[], i: number) => {
          return <div key={i}>
            {row.map((char: string, j: number) => {
            return <span key={j} className="text-white" style={{ whiteSpace: "pre-wrap" }}>{char}</span>
          })}
          </div>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;