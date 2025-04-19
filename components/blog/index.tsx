import { get_sorted_posts } from "@/lib/posts";
import { Post } from "@/app/interfaces/post";

const BlogPage = () => {
  const posts: Post[] = get_sorted_posts();
  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      <h1 className="text-3xl animate-fade-up opacity-0" style={{animationDelay: "100ms"}}>Do People Still Blog?</h1>
      <p className="opacity-0 animate-fade-up" style={{animationDelay: "150ms"}}>Inconsistently posted ramblings of consistently low quality.</p>
      <div className="m-5 w-full md:w-3/5 lg:w-2/5 opacity-0 animate-fade-up">
        <ul>
        {posts.map((post: Post, i: number) => {
            return (
              <li key={post.slug}  className="bg-[#212121] p-3 md:p-5 m-3 border-2 border-grey-light opacity-0 animate-fade-up"
                style={{animationDelay: `${(i + 1) * 100}ms`}}
              >
                <PostComponent position={i} post={post} />
              </li> 
          )})}
        </ul> 
      </div>
    </div>
  );
}

export default BlogPage;

const PostComponent: React.FC<{post: Post, position: number}> = ({post, position}) => {
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange-light", "text-red"];
  const colourClass: string = colours[position % colours.length];
  return (
    <>
      <h2 className={`text-l md:text-xl ${colourClass}`}>{post.title}</h2>
      <p className="text-sm italic text-muted-white mb-2 ">{post.date}</p>
      <a href={`/blog/${post.slug}`}>Article</a>
    </>
  )
}
