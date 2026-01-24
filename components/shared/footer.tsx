"use client";
import { useEffect, useState } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const [updatedDate, setUpdatedDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const effect = async () => {
      const res = await fetch(
        process.env.NODE_ENV === "production"
          ? "https://www.johnling.me/api/updated"
          : "http://localhost:3000/api/updated"
      );
      if (res.ok) {
        const { updated } = await res.json();
        setUpdatedDate(updated);
      } else {
        setUpdatedDate("ERROR");
      }
      setLoading(false);
    };
    effect();
  }, []);
  return (
    <footer
      className={`flex flex-row p-5 mt-2 mb-4 justify-between items-center border-2 border-grey-light rounded-lg bg-grey-dark w-11/12 md:w-4/5 mx-auto font-mono`}
    >
      <div className='flex flex-col gap-4 '>
        <h4 className='font-bold'>
          Made By <span className='text-orange'>John Ling</span>
        </h4>
        <h4 className='font-bold text-sm'>
          Last Updated on <span>{loading ? "Loading..." : updatedDate}</span>
        </h4>
      </div>

      <div className='flex flex-col md:flex-row gap-1 md:gap-4 items-center'>
        <a
          href='https://github.com/John-Ling/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <GitHubIcon sx={{ fontSize: 25 }} />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/john-ling-721721243/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </div>
        </a>
        <a
          href='mailto:johnlingbusiness@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <EmailIcon sx={{ fontSize: 30 }} />
          </div>
        </a>
      </div>
    </footer>
  );
}
