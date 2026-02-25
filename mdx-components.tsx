import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/code-block/code_block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CodeBlock,
    ...components
  };
}
