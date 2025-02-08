import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const WhereSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center" id="contact">
      <h2 className="text-5xl text-grey-light trigger-flicker-on-scroll [--flicker-colour:#C792EA]" style={{animationDelay: "400ms"}}>Where?</h2>
      <h3 className="text-3xl mb-3 mt-3">(can you find me)</h3>
      <div className="p-5 opacity-0 trigger-fade-on-scroll flex items-center" style={{animationDelay: "200ms"}}>
        <div className="transition-all hover:-translate-y-1">
          <a href="https://github.com/John-Ling" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange" 
            style={{animationDelay: "300ms"}}
          > 
            <GitHubIcon sx={{ fontSize: 70}}/>
          </a>
        </div>
        <div className="transition-all hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/john-ling-721721243/" className="opacity-0 trigger-fade-on-scroll p-2 no-underline hover:text-orange" 
            style={{animationDelay: "200ms"}}
          >
            <LinkedInIcon sx={{ fontSize: 80}}/>
          </a>
        </div>
      </div>
      <a className="opacity-0 trigger-fade-on-scroll no-underline" style={{animationDelay: "400ms"}} 
        href="mailto:johnlingbusiness@gmail.com"
      >
        johnlingbusiness@gmail.com
      </a>
    </section>
  )
}

export default WhereSection;