import { BlogPost } from "@/types/blogs/blog_post";
import { get_sorted_posts } from "@/lib/posts";
import { PostListCard } from "@/components/blog/post_list_card";

export default function BlogSection() {
  const latestPost: BlogPost = get_sorted_posts()[0];
  return (
    <>
      <h3 className='text-2xl md:text-3xl mb-3 mt-3 font-bold text-left'>
        My latest <span className='text-orange'>blog post</span>
      </h3>
      <div className='w-full md:w-4/5'>
        <PostListCard post={latestPost} position={0} />
      </div>
    </>
  );
}
