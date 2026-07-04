import matter from "gray-matter";
import { get_post, get_sorted_posts } from "@/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import CodeBlock from "@/components/code-block/code_block";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import style from "./markdown.module.css";
import BlogContent from "./blog_content";

const BASE_URL = "https://blog-posts-607.pages.dev";
type Params = {
  params: Promise<{ slug: string; title: string; date: string }>;
};

export default async function Page(props: Params) {
  const { slug } = await props.params;
  const raw = await fetch(`${BASE_URL}/content/${slug}/content.mdx`).then((r) => r.text());
  const { data } = matter(raw);
  const title = data.title;
  const date = data.date;
  const { content } = await compileMDX({
    source: raw,
    options: {
      parseFrontmatter: true,
      blockJS: false, // Needed to prevent codeblock's string literals being blocked
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
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
          ],
          [rehypeHighlight, { ignoreMissing: true }],
          [rehypeKatex, { throwOnError: false, strict: false }]
        ]
      }
    },
    components: { CodeBlock }
  });

  return (
    <>
      <title>{title}</title>
      <article className={`max-w-[1920px] w-11/12 lg:w-1/3 mx-auto ${style.markdown} text-sm pb-5`}>
        <Link className='link font-mono' href='/blog'>
          Back
        </Link>
        <h1 className='mt-5 mb-5 font-serif'>{title}</h1>
        <p className='mb-5 text-xs text-muted-white font-meslo italic'>{date}</p>
        <BlogContent>{content}</BlogContent>
        <Link className='link font-mono' href='/blog'>
          Back
        </Link>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await get_sorted_posts();
  return posts.map((p) => ({ slug: p.slug, title: p.title, date: p.date }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await get_post(slug);
  return { title: post.title, description: post.date };
}
