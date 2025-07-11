import { meslo } from "@/lib/font"

interface AsciiDisplayProps {
  frameBuffer: string[][],
};

const AsciiDisplay: React.FC<AsciiDisplayProps> = ({ frameBuffer }) => {
  return (
    <>
      <div className={`text-center p-2 overflow-clip whitespace-nowrap select-none ${meslo.variable} font-meslo`}>
        {/* render characters */}
        {frameBuffer.map((row: string[], i: number) => {
          return <div key={i}>
            {row.map((char: string, j: number) => {
            return <span key={j} className="text-[#FFFFFF] inline-block whitespace-pre-wrap">{char}</span>
          })}
          </div>
        })}
      </div>
    </>
  )
}

export default AsciiDisplay;