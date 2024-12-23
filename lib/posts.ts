import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory: string = path.join(process.cwd(), 'posts');

interface Post {
    id: string,
    title: string,
    date: string,
}

export const get_sorted_posts = () => {
    const folders: string[] = fs.readdirSync(postsDirectory);
    const posts: Post[] = folders.map((folder: string) => {
        // assume folder names in posts/ are unique
        const id: string = folder;

        // assume every post has an content.md file 
        const fullPath: string = path.join(postsDirectory, folder, "content.md");

        const content = fs.readFileSync(fullPath, "utf-8");
        const metadata = matter(content).data;
        
        return {id: id, title: metadata.title, date: metadata.date } as Post;   
    });

    // return post in sorted order newest first
    return posts.sort((a: Post, b: Post) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
}

console.log(get_sorted_posts());