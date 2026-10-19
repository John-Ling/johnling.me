import { BlogPost } from "@/types/blogs/blog_post";
import { get_sorted_posts } from "@/lib/posts";
import { BlogCard } from "@/components/blog/blog_card";

export default async function Blog() {
	const posts: BlogPost[] = await get_sorted_posts();
	const latest = posts[0];
	return (
		<>
			<h2 className="text-5xl md:text-6xl  mb-3 mt-3 font-pixel text-center text-accent-primary">
				My Latest Blog Post
			</h2>
			<div className="lg:w-1/2 mx-auto">
				<BlogCard post={latest} position={0} />
			</div>
		</>
	);
}
