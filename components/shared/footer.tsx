import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`flex flex-col p-5 mt-2 items-center border-t-2 border-grey-light bg-grey-dark`}
    >
      <h3>
        Made By <span className='text-orange'>John Ling</span>
      </h3>
      <h4>
        Source Code at{" "}
        <a
          className='link'
          href='https://github.com/John-Ling/johnling.me'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </h4>
      <Link className='link' href='/'>
        Return Home
      </Link>
    </footer>
  );
}
