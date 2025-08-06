import { meslo } from "@/lib/font"

interface AsciiDisplayProps {
  framebuffer: string[][],
};

export default function AsciiDisplay({framebuffer }: AsciiDisplayProps) {
  return (
    <>
      <div className={`text-center p-2 overflow-clip whitespace-nowrap select-none ${meslo.variable} font-meslo`}>
        {/* render characters */}
        {framebuffer.map((row: string[], i: number) => {
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