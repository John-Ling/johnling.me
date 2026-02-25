"use client";
import { useEffect } from "react";

interface BlogContentProps {
  children?: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
