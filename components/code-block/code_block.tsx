import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface CodeBlockProps  {
  language: string,
  filename?: string,
  canCopy?: boolean,
  children: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, filename, canCopy, children }) => {
  return (
    <>
      <div className=" bg-grey-dark border-2 border-grey-light flex flex-col m-0">
        <div className="flex flex-row justify-between bg-grey-normal p-2">
          <p className="text-muted-white p-0 m-0 text-sm">{filename}</p>
          { canCopy ? <ContentPasteIcon className="hover:cursor-pointer text-muted-white active:text-muted-white text-md"/> : <></>}
        </div>
        <div className="p-2">
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