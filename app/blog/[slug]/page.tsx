import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { get_post, get_sorted_posts } from "@/lib/posts";
import { Post } from "@/app/interfaces/post";

const Page = async (props: Params) => {
  const params = await props.params;
  const post: Post = get_post(params.slug);
  // const content = 

  const content: string = post.content;
  return (
    <Markdown remarkPlugins={[remarkGfm]}>
      {content}
    </Markdown> 
  )
}
export default Page;

type Params = {
  params: Promise<{slug: string;}>;
}

// statically render all possible paths (slugs)
// at build time
const generateStaticParams = () => {
  const posts: Post[] = get_sorted_posts();

  return posts.map((post) => {
    slug: post.slug
  });
}