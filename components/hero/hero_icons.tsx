import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChidren: 0.4,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

export default function HeroIcons() {
  return (
    <motion.div variants={container} className='flex flex-row justify-center md:justify-start'>
      <div className='flex items-center justify-center'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://github.com/John-Ling/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-o'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1 text-sm'>
              <GitHubIcon sx={{ fontSize: 20 }} />
              GitHub
            </div>
          </motion.a>
        </div>
      </div>
      <div className='border-grey-muted border h-6 ml-3 mr-3' />
      <div className='opacity-0 animate-fade-up flex items-center'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://www.linkedin.com/in/john-ling-721721243/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1'>
              <LinkedInIcon sx={{ fontSize: 20 }} />
              LinkedIn
            </div>
          </motion.a>
        </div>
      </div>
      <div className='border-grey-muted border h-6 ml-3 mr-3' />
      <div className='opacity-0 animate-fade-up  flex items-center'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1'>
              <DescriptionIcon sx={{ fontSize: 15 }} />
              Resume
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
