"use client";

import { useState } from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface CodeBlockProps  {
  language?: string,
  filename?: string,
  canCopy?: boolean,
  children: string
}

export default function CodeBlock({ language="asdf", filename="", canCopy=true, children }: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const lineNumbers: string[] = generate_lines(children);

  const on_copy = () => {
    setCopied(true);
    // copy code to clipboard
    navigator.clipboard.writeText(children);
    setTimeout(() => setCopied(false), 500);
    return;
  }

  function generate_lines(code: string) {
    const lineNumbers: string[] = [];
    // subtract 2 to account for 2 newline for the starting and closing backticks
    const lineCount = code.split(/\r\n|\r|\n/).length - 2;
    for (let i = 1; i <= lineCount; i++) {
      lineNumbers.push(i.toString());
    }
    return lineNumbers;
  }

  return (
    <>
      <div className="bg-grey-dark border-2 border-grey-light flex flex-col mb-2 mt-2">
        <div className="flex flex-row justify-between items-center bg-grey-normal p-1">
          <p className="text-muted-white p-0 m-0 text-sm leading-none">{filename}</p>
          { !canCopy ?  <></> 
          :
            <>
              <div className="relative">
                <div className={`absolute bottom-10 bg-grey-dark pt-1 pb-1 pl-2 pr-2 ${!tooltipVisible ? "hidden" : "" }`}>
                  { copied ? "Copied" : "Copy"}
                  </div>
                <ContentPasteIcon onMouseOver={() => setTooltipVisible(true)} onMouseOut={() => setTooltipVisible(false)} onClick={on_copy} 
                  className="hover:cursor-pointer text-muted-white active:text-[#A0A0A0] hover:text-[#909090] text-md"
                />  
              </div>
            </>
          }
        </div>
        <div className="flex flex-row">
          {/* line numbers for code */}
          <div className='bg-grey-dark'>
            {lineNumbers.map((number: string, index) => {
              return <p key={index} 
              className="font-bold leading-none pt-0 pb-0 pl-1 pr-1 select-none text-xs text-muted-white text-right">
                {number}
              </p>
            })}
          </div>
          <div className="pb-1 pt-1 pl-2 overflow-auto">
            {/* return code block markdown with syntax highlighting */}
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {`\`\`\`${language}${children}\`\`\``}
            </Markdown>
          </div>
        </div>
        
      </div>
    </>
  )
}