import { get_sorted_posts } from "@/lib/posts";

export default function BlogPage() {
  const posts: BlogPost[] = get_sorted_posts();
  return (
    <>
      <title>Blog</title>
      <div className='flex flex-col items-center min-h-screen p-5 max-w-[1920px] mx-auto'>
        <h1 className={`text-3xl animate-fade-up opacity-0`} style={{ animationDelay: "100ms" }}>
          Do People Still
          <span className='text-[#2e2e2e] animate-flicker-on' style={{ animationDelay: "1000ms" }}>
            {" "}
            Blog?{" "}
          </span>
        </h1>

        <p className='opacity-0 animate-fade-up' style={{ animationDelay: "150ms" }}>
          Inconsistently posted ramblings of consistently low quality.
        </p>
        <div className='m-5 w-full md:w-3/5 lg:w-2/5 opacity-0 animate-fade-up'>
          <ul>
            {posts.map((post: BlogPost, i: number) => {
              return (
                <li
                  key={post.slug}
                  className='bg-grey-card p-3 md:p-5 m-3 border-2 border-grey-light rounded-lg opacity-0 animate-fade-up flex flex-col justify-between items-start'
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <PostComponent position={i} post={post} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

interface PostComponentProps {
  post: BlogPost;
  position: number;
}

function PostComponent({ post, position }: PostComponentProps) {
  const colours: string[] = [
    "text-blue",
    "text-magenta",
    "text-teal",
    "text-green",
    "text-yellow",
    "text-orange-light",
    "text-red"
  ];
  const colourClass: string = colours[position % colours.length];
  return (
    <>
      <div className='pb-4 w-11/12'>
        <h2 className={`text-md ${colourClass} mb-2`}>{post.title}</h2>
        <p className='text-xs text-muted-white'>{post.date}</p>
      </div>
      <a className='link w-fit text-sm' href={`/blog/${post.slug}`}>
        Article
      </a>
    </>
  );
}
