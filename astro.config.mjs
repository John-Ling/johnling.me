// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import rehypeHighlight from 'rehype-highlight';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react({
        // experimentalReactChildren: true,
    }), mdx()],
    markdown: {
        rehypePlugins: [rehypeHighlight]
    }
});