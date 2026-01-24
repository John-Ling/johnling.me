import { get_sorted_posts } from "@/lib/posts";
import PaginatedPosts from "@/components/blog/paginated_posts";
import { BlogPost } from "@/types/blogs/blog_post";

export default function BlogPage() {
  const posts: BlogPost[] = get_sorted_posts();
  if (!posts) {
    console.log("NULL");
  }
  return (
    <>
      <title>Blog</title>
      <div className='flex flex-col items-center min-h-screen max-w-[1920px] w-11/12 lg:w-10/12 mx-auto'>
        <div className='w-full md:w-3/5 lg:w-2/5'>
          <h1 className='text-4xl font-serif font-bold'>
            Do People Still <span className='text-orange'>Blog?</span>
          </h1>
          <div className=''>
            <PaginatedPosts posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
