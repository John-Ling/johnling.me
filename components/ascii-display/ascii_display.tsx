interface AsciiDisplayProps {
  frameBuffer: string[],
  size: {
    width: number,
    height: number
  };
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer, size }) => {
  return (
    <>
      <div className="text-center p-5 grid" style={{"gridTemplateColumns":`repeat(${size.width},minmax(0,1fr))`}}>
        {/* render characters */}
        {frameBuffer.map((char: string, i: number) => {
          return <span key={i}  className="text-white" style={{ whiteSpace: "pre-wrap" }}>{char}</span>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;