import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

export default function HeroIcons() {
  return (
    <div
      className='opacity-0 animate-fade-up flex flex-row justify-center md:justify-start'
      style={{ animationDelay: "400ms" }}
    >
      <div className='opacity-0 animate-fade-up flex items-center'>
        <div className='transition-transform hover:-translate-y-1 hover:text-orange'>
          <a
            href='https://github.com/John-Ling/'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up icon-link'
            style={{ animationDelay: "400ms" }}
          >
            <GitHubIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
      <div className='opacity-0 animate-fade-up flex items-center'>
        <div className='transition-transform hover:-translate-y-1 hover:text-orange'>
          <a
            href='https://www.linkedin.com/in/john-ling-721721243/'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up hover:-translate-y-2 icon-link'
            style={{ animationDelay: "500ms" }}
          >
            <LinkedInIcon sx={{ fontSize: 35 }} />
          </a>
        </div>
      </div>
      <div className='opacity-0 animate-fade-up  flex items-center'>
        <div className='transition-transform hover:-translate-y-1 hover:text-orange'>
          <a
            href='https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-0 animate-fade-up hover:-translate-y-2 icon-link'
            style={{ animationDelay: "600ms" }}
          >
            <DescriptionIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
