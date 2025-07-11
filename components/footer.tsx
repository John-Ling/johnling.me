import Link from "next/link";
import { meslo } from "@/lib/font";

const Footer = () => {
  return (
    <footer className={`flex flex-col p-5 items-center border-t-2 border-grey-light bg-grey-dark ${meslo.variable} font-meslo`}>
      <h3>Made By <span className="text-orange">John Ling</span></h3>
      <h4>Source Code at <a href="https://github.com/John-Ling/johnling.me" target="_blank" rel="noopener">Github</a></h4>
      <Link href="/">Return Home</Link>
    </footer>
  )
}

export default Footer;