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

const CodeBlock: React.FC<CodeBlockProps> = ({ language, filename, canCopy, children }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  return (
    <>
      <div className="bg-grey-dark border-2 border-grey-light flex flex-col mb-2 mt-2">
        <div className="flex flex-row justify-between bg-grey-normal p-2">
          <p className="text-muted-white p-0 m-0 text-sm">{filename}</p>
          { !canCopy ?  <></> 
          :
            <>
              <div className="relative">
                <div className={`absolute bottom-10 bg-grey-dark pt-1 pb-1 pl-2 pr-2 ${!tooltipVisible ? "hidden" : "" }`}>
                  { copied ? "Copied" : "Copy"}
                  </div>
                <ContentPasteIcon onMouseOver={() => setTooltipVisible(true)} onMouseOut={() => setTooltipVisible(false)} 
                  className="hover:cursor-pointer text-muted-white active:text-[#A0A0A0] hover:text-[#909090] text-md"
                />  
              </div>
            </>
          }
        </div>
        <div className="p-2 overflow-scroll">
          {/* return code block markdown with syntax highlighting */}
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {`\`\`\`${language}${children}\`\`\``}
          </Markdown>
        </div>
      </div>
    </>
  )
}

export default CodeBlock;