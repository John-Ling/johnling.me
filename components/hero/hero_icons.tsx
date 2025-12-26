import { motion, stagger } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.05)
    }
  }
};

const item = {
  hidden: { opacity: 0, transform: "translateY(8px)" },
  show: { opacity: 1, transform: "translateY(0px)" }
};

export default function HeroIcons() {
  return (
    <motion.div
      variants={container}
      className='flex flex-col md:flex-row justify-center md:justify-start text-sm gap-1'
    >
      <div className='flex'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://github.com/John-Ling/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1'>
              <GitHubIcon sx={{ fontSize: 20 }} />
              GitHub
            </div>
          </motion.a>
        </div>
        <motion.div variants={item} className='border-grey-muted border h-6 ml-3 mr-3' />
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

      <motion.div
        variants={item}
        className='hidden md:block border-grey-muted border h-6 ml-3 mr-3'
      />

      <div className='flex'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1'>
              <DescriptionIcon sx={{ fontSize: 20 }} />
              Resume
            </div>
          </motion.a>
        </div>
        <motion.div variants={item} className='border-grey-muted border h-6 ml-3 mr-3' />
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='mailto:johnlingbusiness@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            <div className='flex items-center gap-2 transition-transform hover:-translate-y-1'>
              <EmailIcon sx={{ fontSize: 20 }} />
              Email
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
