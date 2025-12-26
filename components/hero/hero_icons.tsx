import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

export default function HeroIcons() {
  return (
    <div
      className='opacity-0 animate-fade-up flex flex-row justify-center md:justify-start'
      style={{ animationDelay: "400ms" }}
    >
      <div className='opacity-0 animate-fade-up flex items-center justify-center'>
        <div className=' hover:text-orange transition-colors'>
          <a
            href='https://github.com/John-Ling/'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up icon-link flex items-center gap-2'
            style={{ animationDelay: "400ms" }}
          >
            <GitHubIcon sx={{ fontSize: 20 }} />
            GitHub
          </a>
        </div>
      </div>
      <div className='border-grey-muted border h-6 ml-3 mr-3' />
      <div className='opacity-0 animate-fade-up flex items-center'>
        <div className='hover:text-orange transition-colors'>
          <a
            href='https://www.linkedin.com/in/john-ling-721721243/'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up hover:-translate-y-2 icon-link flex items-center gap-2'
            style={{ animationDelay: "500ms" }}
          >
            <LinkedInIcon sx={{ fontSize: 20 }} />
            LinkedIn
          </a>
        </div>
      </div>
      <div className='border-grey-muted border h-6 ml-3 mr-3' />
      <div className='opacity-0 animate-fade-up  flex items-center'>
        <div className='hover:text-orange transition-colors'>
          <a
            href='https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up hover:-translate-y-2 icon-link flex items-center gap-2'
            style={{ animationDelay: "600ms" }}
          >
            <DescriptionIcon sx={{ fontSize: 15 }} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
