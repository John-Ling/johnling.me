import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Post } from '@/app/interfaces/post';

const postsDirectory: string = path.join(process.cwd(), 'posts');

export const get_sorted_posts = () => {
    const folders: string[] = fs.readdirSync(postsDirectory);
    const posts: Post[] = folders.map((folder: string) => {
        return get_post(folder);
    });

    // return post in sorted order newest first
    return posts.sort((a: Post, b: Post) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
}

export const get_post = (slug: string) => {
    const fullPath: string = path.join(postsDirectory, slug, "content.md");
    console.log(fullPath);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const parsed = matter(fileContent);
    const metadata = parsed.data;
    const content = parsed.content;

    return {
        slug: slug, 
        title: metadata.title, 
        date: metadata.date, 
        content: content 
    } as Post;
}