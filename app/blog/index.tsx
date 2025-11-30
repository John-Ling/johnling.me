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
      <div className='flex flex-col items-center min-h-screen p-5 max-w-[1920px] mx-auto'>
        <h1 className={`text-3xl animate-fade-up opacity-0`} style={{ animationDelay: "100ms" }}>
          Do People Still{" "}
          <span className='text-orange' style={{ animationDelay: "1000ms" }}>
            Blog?
          </span>
        </h1>
        <p className='opacity-0 animate-fade-up' style={{ animationDelay: "150ms" }}>
          Inconsistently written ramblings of consistently low quality.
        </p>
        <div className='m-5 w-full md:w-3/5 lg:w-2/5'>
          <PaginatedPosts posts={posts} />
          {/* <ul>
            {posts.map((post: BlogPost, i: number) => {
              return (
                <li
                  key={post.slug}
                  className='bg-grey-card p-3 md:p-5 m-3 border-2 border-grey-light rounded-lg opacity-0 animate-fade-up flex flex-col justify-between items-start'
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <PostListCard position={i} post={post} />
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </>
  );
}
