import { BlogPost } from "@/types/blogs/blog_post";
import Link from "next/link";

interface PostListCardProps {
  post: BlogPost;
  position: number;
  noColour?: boolean;
}

export function PostListCard({ post, position, noColour = false }: PostListCardProps) {
  const colours: string[] = ["text-blue", "text-red"];

  const wordSubset =
    post.content
      .split(/\s+/)
      .map((token) => token.replace(/^[#*_]+|[#*_]+$/g, "").replace(/^\*{2}|\*{2}$/g, ""))
      .slice(0, 20)
      .filter((token) => token !== "##" && token !== "#")
      .join(" ")
      .replace(/[.,!?;:\\s]+$/, "") + "...";

  const colourClass: string = noColour ? "text-white" : colours[position % colours.length];

  return (
    <div className='p-3 md:p-5  bg-grey-card border-2 border-grey-light rounded-lg flex flex-col justify-between items-start'>
      <div className='pb-4'>
        <h2 className={`text-md ${colourClass} mb-2`}>{post.title}</h2>
        <p className='text-xs text-muted-white font-mono'>{post.date}</p>
        <p className='w-10/12 mt-2 text-xs  text-muted-white overflow-hidden'>{wordSubset}</p>
      </div>
      <Link className='link w-fit text-xs font-mono' href={`/blog/${post.slug}`}>
        Article
      </Link>
    </div>
  );
}
