import { get_sorted_posts } from "@/lib/posts";
import PaginatedPosts from "@/components/blog/paginated_posts";

export default function BlogPage() {
  const posts: BlogPost[] = get_sorted_posts();
  if (!posts) {
    console.log("NULL");
  }
  return (
    <>
      <title>Blog</title>
      <div className='flex flex-col items-center min-h-screen max-w-[1920px] mx-auto'>
        <h1 className='text-3xl'>
          Do People Still <span className='text-orange'>Blog?</span>
        </h1>
        <p>Inconsistently written ramblings of consistently low quality.</p>
        <div className='m-5 w-full md:w-3/5 lg:w-2/5'>
          <PaginatedPosts posts={posts} />
        </div>
      </div>
    </>
  );
}
