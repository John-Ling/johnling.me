interface AsciiDisplayProps {
  grid: string[][],
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ grid }) => {
  return (
    <>
      <div className="text-center p-5">
        {/* render characters */}
        {grid.map((arr: string[]) => {
          return (
            <div>
              {arr.map((char: string) =>
                <span className='font-bold text-white' style={{ whiteSpace: "pre-wrap" }}>{char}</span>)
              }
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;