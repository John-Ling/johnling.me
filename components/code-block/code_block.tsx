"use client";

import { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

interface CodeBlockProps {
  language?: string;
  filename?: string;
  canCopy?: boolean;
  children: string;
}

export default function CodeBlock({
  language = "plaintext",
  filename = "",
  canCopy = true,
  children
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const cleanCode = children.trim();
  const lineNumbers: string[] = generate_lines(cleanCode);

  const on_copy = () => {
    setCopied(true);
    navigator.clipboard.writeText(cleanCode);
    setTimeout(() => setCopied(false), 500);
  };

  function generate_lines(code: string) {
    const lineCount = code.split(/\r\n|\r|\n/).length;
    return Array.from({ length: lineCount }, (_, i) => (i + 1).toString());
  }

  return (
    <div className='bg-[#161616] border-2 border-grey-light flex flex-col mb-5 mt-5'>
      <div className='flex flex-row justify-between items-center bg-grey-normal pl-3 pr-3 pt-1 pb-1'>
        <p className='text-muted-white p-0 m-0 text-sm leading-none'>{filename}</p>
        {canCopy && (
          <div className='relative'>
            <div
              className={`absolute bottom-10 pt-1 pb-1 pl-2 pr-2 bg-grey-normal rounded ${!tooltipVisible ? "hidden" : ""}`}
            >
              {copied ? "Copied" : "Copy"}
            </div>
            <ContentPasteIcon
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
              onClick={on_copy}
              className='hover:cursor-pointer text-muted-white active:text-[#A0A0A0] hover:text-[#909090] text-md'
            />
          </div>
        )}
      </div>
      <div className='flex flex-row'>
        {/* line numbers */}
        <div className='bg-grey-normal'>
          {lineNumbers.map((number: string, index) => (
            <p
              key={index}
              className='font-bold font-mono leading-none pl-2 pr-2 select-none text-xs text-muted-white text-right'
            >
              {number}
            </p>
          ))}
        </div>
        <pre className='bg-[#161616] pl-2 w-full overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden m-0'>
          <code className={`language-${language}`}>{cleanCode}</code>
        </pre>
      </div>
    </div>
  );
}
