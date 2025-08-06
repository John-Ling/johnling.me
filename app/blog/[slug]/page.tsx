import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { get_post, get_sorted_posts } from "@/lib/posts";

import Markdown from "react-markdown";
import CodeBlock from "@/components/code-block/code_block";

import style from "./markdown.module.css";
import "/styles/syntax_highlighting.css"; // include modified highlight.js theme
import { MDXComponents } from "mdx/types";

export default async function Page(props: Params) {
  const components: MDXComponents = {CodeBlock, Markdown};
  const params = await props.params;
  const post: BlogPost = get_post(params.slug);
  const content: string = post.content;

  return (
    <>
      <title>{post.title}</title>
      <div className="w-full lg:w-1/2 m-auto pt-5 pb-5 pl-2 pr-2">
        <Link href="/blog">Back</Link>
        <article className={`pt-5 pb-5 ${style.markdown}`}>
          <h1 className="text-xl mb-5">{post.title}</h1>
          <p className="italic mb-5 text-muted-white">{post.date}</p>
          <MDXRemote source={content} components={components} />
        </article>
        <Link href="/blog">Back</Link>
      </div>
    </>   
  )
}

type Params = {
  params: Promise<{slug: string;}>;
}

export async function generateMetadata({ params }: Params) {
  const slug = (await params).slug
  const post = get_post(slug);
  // set title dynamically
  return {
    title: post.title,
    description: post.date
  }
}

// statically render all possible paths (slugs) at build time
export async function generateStaticParams() {
  const posts: BlogPost[] = get_sorted_posts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}