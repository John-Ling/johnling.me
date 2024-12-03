import "/styles/globals.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col p-5 items-center border-t-2 border-grey-light bg-grey-dark mt-auto">
      <h3>Made By <span className="text-orange">John Ling</span></h3>
      <h4>Source Code at <a href="https://github.com/John-Ling/johnling.me">Github</a></h4>
      <Link href="/">Return Home</Link>
    </footer>
  )
}

export default Footer;