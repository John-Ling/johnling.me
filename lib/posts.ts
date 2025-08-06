import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory: string = path.join(process.cwd(), 'posts');

export function get_sorted_posts() {
    const folders: string[] = fs.readdirSync(postsDirectory);
    const posts: BlogPost[] = folders.map((folder: string) => {
        return get_post(folder)
    });

    // return post in sorted order newest first
    return posts.sort((a: BlogPost, b: BlogPost) => {
        if (convert_date(a.date) < convert_date(b.date)) {
            return 1;
        }
        return -1;
    });
}

function convert_date(date: string) {
    const arrDate = date.split('/');
    return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`
}

export function get_post(slug: string) {
    const fullPath: string = path.join(postsDirectory, slug, "content.mdx");
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const parsed = matter(fileContent);
    const metadata = parsed.data;
    const content = parsed.content;

    return {
        slug: slug, 
        title: metadata.title, 
        date: metadata.date, 
        content: content 
    } as BlogPost;
}