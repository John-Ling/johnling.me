import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import withBundleAnalyzer from "@next/bundle-analyzer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  enabled: process.env.ANALYZE === "true"
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [
      rehypeHighlight,
      rehypeKatex,
      [
        rehypeRaw,
        {
          passThrough: [
            "mdxjsEsm",
            "mdxFlowExpression",
            "mdxJsxFlowElement",
            "mdxJsxTextElement",
            "mdxTextExpression"
          ]
        }
      ]
    ]
  }
});

export default withMDX(withBundleAnalyzer(nextConfig));
