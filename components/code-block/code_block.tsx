"use client";

import { useState, isValidElement } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import hljs from "highlight.js";
import "./theme.css";

interface CodeBlockProps {
  language?: string;
  filename?: string;
  canCopy?: boolean;
  children: React.ReactNode;
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  return "";
}

export default function CodeBlock({
  language = "plaintext",
  filename = "",
  canCopy = true,
  children
}: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const cleanCode = extractText(children).trim();
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
        <pre className='bg-grey-normal font-bold pl-2 pr-2 select-none text-xs text-muted-white text-right m-0 overflow-hidden'>
          {lineNumbers.join("\n")}
        </pre>
        <pre className='bg-[#161616] pl-2 w-full overflow-y-hidden m-0'>
          <code
            className='hljs'
            dangerouslySetInnerHTML={{ __html: hljs.highlight(cleanCode, { language }).value }}
          />
        </pre>
      </div>
    </div>
  );
}
