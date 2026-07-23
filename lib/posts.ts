import matter from "gray-matter";
import { BlogPost } from "@/types/blogs/blog_post";

const BASE_URL = "https://blog-posts-607.pages.dev";

export async function get_sorted_posts(): Promise<BlogPost[]> {
	const index = await fetch(`${BASE_URL}/index.json`).then((r) => r.json());
	const posts = await Promise.all(
		index.map(async ({ slug, title, date, updated }: BlogPost) => {
			const raw = await fetch(`${BASE_URL}/content/${slug}/content.mdx`).then((r) => r.text());
			return { slug, title, date, updated, content: matter(raw).content };
		}),
	);
	return posts.sort((a, b) => (convert_date(a.date) < convert_date(b.date) ? 1 : -1));
}

export async function get_post(slug: string): Promise<BlogPost> {
	const raw = await fetch(`${BASE_URL}/content/${slug}/content.mdx`).then((r) => r.text());
	const { data, content } = matter(raw);
	return { slug, title: data.title, date: data.date, updated: data.updated, content };
}

function convert_date(date: string) {
	const arrDate = date.split("/");
	return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
}
