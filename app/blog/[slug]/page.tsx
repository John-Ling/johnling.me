import Link from "next/link";

import ReactMarkdown  from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import { get_post, get_sorted_posts } from "@/lib/posts";
import { Post } from "@/app/interfaces/post";

import style from "./markdown.module.css";
import "/styles/syntax_highlighting.css"; // include modified highlight.js theme

const Page = async (props: Params) => {
  const params = await props.params;
  const post: Post = get_post(params.slug);
  const content: string = post.content;

  return (
    <>
      <div className="w-full lg:w-1/2 m-auto pt-5 pb-5 pl-2 pr-2">
        <Link href="/blog">Back</Link>
        <article className={`pt-5 pb-5 ${style.markdown}`}>
          <h1 className="text-xl mb-5">{post.title}</h1>
          <p className="italic mb-5 text-muted-white">{post.date}</p>
          {/* 
          remarkGFM: Github Flavoured Markdown support
          rehypeRaw: Allows embedding of pure HTML in markdown
          rehypeHighlight: Syntax highlighting in code blocks
          */}
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {content}
          </ReactMarkdown> 
        </article>
        <Link href="/blog">Back</Link>
      </div>
    </>   
  )
}
export default Page;

type Params = {
  params: Promise<{slug: string;}>;
}

// statically render all possible paths (slugs) at build time
export const generateStaticParams = async () => {
  const posts: Post[] = get_sorted_posts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}