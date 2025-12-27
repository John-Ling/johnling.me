import { BlogPost } from "@/types/blogs/blog_post";
import Link from "next/link";

interface PostListCardProps {
  post: BlogPost;
  position: number;
}

export function PostListCard({ post, position }: PostListCardProps) {
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
    <div className='p-3 md:p-5  bg-grey-card border-2 border-grey-light rounded-lg flex flex-col justify-between items-start'>
      <div className='pb-4 w-11/12'>
        <h2 className={`text-md ${colourClass} mb-2`}>{post.title}</h2>
        <p className='text-xs text-muted-white font-italic'>{post.date}</p>
      </div>
      <Link className='link w-fit text-sm' href={`/blog/${post.slug}`}>
        Article
      </Link>
    </div>
  );
}
