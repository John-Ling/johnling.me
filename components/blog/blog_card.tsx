import { BlogPost } from "@/types/blogs/blog_post";
import Link from "next/link";

interface BlogCardProps {
	post: BlogPost;
	position: number;
	noColour?: boolean;
}

export function BlogCard({ post, position, noColour = false }: BlogCardProps) {
	const wordSubset =
		post.content
			.split(/\s+/)
			.map((token) => token.replace(/^[#*_]+|[#*_]+$/g, "").replace(/^\*{2}|\*{2}$/g, ""))
			.slice(0, 20)
			.filter((token) => token !== "##" && token !== "#")
			.join(" ")
			.replace(/[.,!?;:\\s]+$/, "") + "...";

	return (
		<div className="p-3 md:p-5 bg-card border-2 text-black  border-black styled-drop-shadow flex flex-col justify-between items-start">
			<div className="pb-4 ">
				<h2 className={`text-md mb-2`}>{post.title}</h2>
				<p className="text-xs font-mono italic">{post.date}</p>
				{post.updated && <p className="text-xs font-mono italic">Updated: {post.updated}</p>}
				<p className="w-10/12 mt-2 text-sm   overflow-hidden">{wordSubset}</p>
			</div>
			<Link className="link w-fit text-xs font-mono " href={`/blog/${post.slug}`}>
				Article
			</Link>
		</div>
	);
}
