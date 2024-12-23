import { get_sorted_posts } from "@/lib/posts";
import { Post } from "../interfaces/post";

export default function Blog() {
  const posts: Post[] = get_sorted_posts();
  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      <h1 className="font-bold">Do People Still Blog?</h1>
      <h2>I don't know</h2>
      <p>Anyways here's a list of my ramblings</p>
      <div className="bg-grey-dark border-2 border-grey-light p-5 m-5 md:w-3/5 lg:w-2/5 ">
        <ul>
          {posts.map((post: Post, i: number) => {
            return <li key={post.slug} className="bg-grey-normal p-5 m-3 border-2 border-grey-light">
                <PostComponent position={i} post={post} />
              </li> 
          })}
        </ul> 
      </div>
    </div>
  );
}

const PostComponent: React.FC<{post: Post, position: number}> = ({post, position}) => {
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange", "text-red"];
  const colourClass: string = colours[position % colours.length];
  return (
    <>
      <h3 className={`${colourClass}`}>{post.title}</h3>
      <p className="italic9-">{post.date}</p>
      <a href={`/blog/${post.slug}`}>Article</a>
    </>
  )
}
