import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactSection() {
  return (
    <>
      <h3 className='text-2xl md:text-3xl mb-3 mt-3 font-bold text-left'>
        Where you can <span className='text-orange'>find me</span>
      </h3>
      <div className='flex flex-col gap-2'>
        <a
          href='https://github.com/John-Ling/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <GitHubIcon sx={{ fontSize: 25 }} />
            GitHub
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/john-ling-721721243/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <LinkedInIcon sx={{ fontSize: 25 }} />
            LinkedIn
          </div>
        </a>
        <a
          href='mailto:johnlingbusiness@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='icon-link flex items-center gap-2'
        >
          <div className='flex items-center gap-2 transition-colors hover:text-orange'>
            <EmailIcon sx={{ fontSize: 25 }} />
            Email
          </div>
        </a>
      </div>
    </>
  );
}
