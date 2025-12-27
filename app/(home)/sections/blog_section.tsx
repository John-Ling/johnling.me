import { BlogPost } from "@/types/blogs/blog_post";
import { get_sorted_posts } from "@/lib/posts";
import Link from "next/link";

export default function BlogSection() {
  const latestPost: BlogPost = get_sorted_posts()[0];
  const wordSubset =
    latestPost.content
      .split(/\s+/)
      .slice(0, 20)
      .join(" ")
      .replace(/[.,!?;:\\s]+$/, "") + "...";
  return (
    <>
      <h3 className='text-2xl md:text-3xl mb-3 mt-3 font-bold text-left'>
        My latest <span className='text-orange'>blog post</span>
      </h3>
      <div className='w-full'>
        <div className='p-3 md:p-5 bg-grey-card border-2 border-grey-light rounded-lg flex flex-col justify-between items-start h-48'>
          <h2 className={`text-md mb-2`}>{latestPost.title}</h2>
          <p className='text-xs text-muted-white font-italic'>{latestPost.date}</p>
          <p
            className='w-11/12 mt-2 text-sm text-muted-white overflow-hidden'
            style={{ maxHeight: "3.5rem" }}
          >
            {wordSubset}
          </p>
          <Link className='mt-auto link w-fit text-sm' href={`/blog/${latestPost.slug}`}>
            Article
          </Link>
        </div>
      </div>
    </>
  );
}
