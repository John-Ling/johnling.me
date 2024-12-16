interface AsciiDisplayProps {
  frameBuffer: string[],
  rowWidth: number,
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer, rowWidth }) => {
  return (
    <>
      <div className="text-center p-5 grid" style={{"gridTemplateColumns":`repeat(${rowWidth},minmax(0,1fr))`}}>
        {/* render characters */}
        {frameBuffer.map((char: string, i: number) => {
          return <span key={i}  className="text-white" style={{ whiteSpace: "pre-wrap" }}>{char}</span>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;