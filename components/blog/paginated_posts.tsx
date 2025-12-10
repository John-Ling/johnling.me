"use client";

import { useState } from "react";
import { PostListCard } from "./post_list_card";

interface PaginatedPostsProps {
  posts: BlogPost[];
}

export default function PaginatedPosts({ posts }: PaginatedPostsProps) {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageCount = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const [startColourIndex, setStartColourIndex] = useState<number>(0);

  const previous_page = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setStartColourIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  const next_page = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
      setStartColourIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  return (
    <>
      <div className='flex items-center text-2xl m-3 mt-auto'>
        <button
          className={`${currentPage === 1 ? "text-muted-white" : "hover:text-orange"} text-2xl`}
          onClick={previous_page}
          aria-disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className='pl-2 pr-2 text-sm'>
          Page {currentPage} of {pageCount}
        </span>
        <button
          className={`${currentPage === pageCount ? "text-muted-white" : "hover:text-orange"} text-2xl`}
          onClick={next_page}
          aria-disabled={currentPage === pageCount}
        >
          {">"}
        </button>
      </div>
      <div>
        {currentItems.map((post, i) => {
          return <PostListCard key={i} position={startColourIndex + i} post={post} />;
        })}
      </div>
    </>
  );
}
