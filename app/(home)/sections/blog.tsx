import { BlogPost } from "@/types/blogs/blog_post";
import { get_sorted_posts } from "@/lib/posts";
import { PostListCard } from "@/components/blog/post_list_card";

export default function Blog() {
  const latestPost: BlogPost = get_sorted_posts()[0];
  return (
    <>
      <h2 className='text-2xl md:text-3xl mb-3 mt-3 font-serif font-bold text-left'>
        My Latest <span className='text-orange'>Blog Post</span>
      </h2>
      <div className='w-full'>
        <PostListCard post={latestPost} position={0} />
      </div>
    </>
  );
}
