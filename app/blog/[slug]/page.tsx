import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import { get_post, get_sorted_posts } from '@/lib/posts';

import Markdown from 'react-markdown';
import CodeBlock from '@/components/code-block/code_block';
import style from './markdown.module.css';
import 'katex/dist/katex.min.css';
import '/styles/syntax_highlighting.css'; // include modified highlight.js theme
import { MDXComponents } from 'mdx/types';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default async function Page(props: Params) {
  const components: MDXComponents = { CodeBlock, Markdown };
  const params = await props.params;
  const post: BlogPost = get_post(params.slug);
  const compiled = await compileMDX({
    source: post.content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeHighlight,
          rehypeKatex,
          [
            rehypeRaw,
            {
              passThrough: [
                'mdxjsEsm',
                'mdxFlowExpression',
                'mdxJsxFlowElement',
                'mdxJsxTextElement',
                'mdxTextExpression'
              ]
            }
          ]
        ]
      }
    }
  });

  return (
    <>
      <title>{post.title}</title>
      <div className='w-full lg:w-1/2 max-w-[1920px] mx-auto pt-5 pb-5 pl-2 pr-2'>
        <Link className='link' href='/blog'>
          Back
        </Link>
        <article className={`pt-5 pb-5 ${style.markdown}`}>
          <h1 className='text-xl mb-5'>{post.title}</h1>
          <p className='mb-5 text-muted-white'>{post.date}</p>
          <div>{compiled.content}</div>
        </article>
        <Link className='link' href='/blog'>
          Back
        </Link>
      </div>
    </>
  );
}

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params) {
  const slug = (await params).slug;
  const post = get_post(slug);
  // set title dynamically
  return {
    title: post.title,
    description: post.date
  };
}

// statically render all possible paths (slugs) at build time
export async function generateStaticParams() {
  const posts: BlogPost[] = get_sorted_posts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}
