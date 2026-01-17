"use client";

import { compileMDX } from "next-mdx-remote/rsc";
import "katex/dist/katex.min.css";
import "/styles/syntax_highlighting.css"; // include modified highlight.js theme
import { useEffect } from "react";

interface ContentProps {
  mdx: Awaited<ReturnType<typeof compileMDX>>;
}

export default function Content({ mdx }: ContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{mdx.content}</>;
}
