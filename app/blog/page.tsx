import { get_sorted_posts } from "@/lib/posts";

interface Post {
  id: string,
  title: string,
  date: string,
};

export default function Blog() {
  const posts: Post[] = get_sorted_posts();
  return (
    <>
      <ul>
        {posts.map((post: Post) => {
          return <li>{post.title}</li>
        })}
      </ul>
    </>
  );
}