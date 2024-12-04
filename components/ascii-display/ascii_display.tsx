interface AsciiDisplayProps {
  grid: string[][],
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ grid }) => {
  return (
    <>
      <div className="text-center p-5">
        {/* render characters */}
        {grid.map((arr: string[], i: number) => {
          return (
            <div key={i}>
              {arr.map((char: string, i: number) =>
                <span key={i}  className='font-bold text-white' style={{ whiteSpace: "pre-wrap" }}>{char}</span>)
              }
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;