import { get_post, get_sorted_posts } from "@/lib/posts";

import style from "./markdown.module.css";
import "katex/dist/katex.min.css";
import Link from "next/link";
import BlogContent from "./blog_content";
import { BlogPost } from "@/types/blogs/blog_post";

export default async function Page(props: Params) {
  const params = await props.params;
  const post: BlogPost = get_post(params.slug);
  const { default: Post } = await import(`@/posts/${params.slug}/content.mdx`);

  return (
    <>
      <title>{post.title}</title>
      <div className='max-w-[1920px] w-10/12 md:w-9/12  mx-auto'>
        <Link className='link font-mono' href='/blog'>
          Back
        </Link>
        <article className={`pt-5 pb-5 ${style.markdown}`}>
          <h1 className='text-xl mb-5 font-serif'>{post.title}</h1>
          <p className='mb-5 text-sm text-muted-white font-meslo italic'>{post.date}</p>
          <BlogContent>
            <Post />
          </BlogContent>
        </article>
        <Link className='link font-mono' href='/blog'>
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
