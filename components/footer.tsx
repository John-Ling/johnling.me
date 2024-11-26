import "/styles/globals.css";

const Footer = () => {
  return (
    <footer className="flex flex-col p-5 items-center bg-grey-dark mt-auto">
      <h3>Made By <span className="text-orange">John Ling</span></h3>
      <h4>Source Code at <a href="https://github.com/John-Ling/johnling.me">Github</a></h4>
      <h5><a href="/">Return Home</a></h5>
    </footer>
  )
}

export default Footer;