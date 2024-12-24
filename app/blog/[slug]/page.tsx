import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import style from "./markdown.module.css";

import { get_post, get_sorted_posts } from "@/lib/posts";
import { Post } from "@/app/interfaces/post";

const Page = async (props: Params) => {
  const params = await props.params;
  const post: Post = get_post(params.slug);
  const content: string = post.content;

  return (
    <article className={`w-1/2 m-auto pt-5 pb-5 ${style.markdown}`}>
      <h1 className="text-xl mb-5">{post.title}</h1>
      <p className="italic mb-5 text-muted-white">{post.date}</p>

      <Markdown rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown> 
    </article>
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