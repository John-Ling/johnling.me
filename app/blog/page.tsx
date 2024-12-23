import { get_sorted_posts } from "@/lib/posts";

interface Post {
  id: string,
  title: string,
  date: string,
};

export default function Blog() {
  const posts: Post[] = get_sorted_posts();
  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      <h1 className="font-bold">Do People Still Blog?</h1>
      <h2>I don't know</h2>
      <p>Anyways here's a list of my ramblings</p>
      <div className="bg-grey-dark border-2 border-grey-light p-5 w-2/5">
        <ul>
          {posts.map((post: Post, i: number) => {
            return <PostComponent position={i} post={post} />
          })}
        </ul> 
      </div>
    </div>
  );
}

const PostComponent: React.FC<{post: Post, position: number}> = ({post, position}) => {
  return (
    <li key={post.id} className="bg-grey-normal p-5 m-3 border-2 border-grey-light">
      <h3>{post.title}</h3>
      <p className="italic">{post.date}</p>
      <a href="/">Article</a>
    </li>
  )
}
