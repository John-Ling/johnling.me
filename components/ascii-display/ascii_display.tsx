interface AsciiDisplayProps {
  frameBuffer: string[][],
  size: {
    width: number,
    height: number
  };
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer, size }) => {
  return (
    <>
      <div className="text-center p-5">
        {/* render characters */}
        {frameBuffer.map((row: string[], i: number) => {
          return <div>
            {row.map((char: string, j: number) => {
            return <span className="text-white" style={{ whiteSpace: "pre-wrap" }}>{char}</span>
          })}
          </div>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;