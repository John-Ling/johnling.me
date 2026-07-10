import { motion, stagger } from "framer-motion";

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

export default function HeroContactDetails() {
  return (
    <motion.div
      variants={container}
      className='flex flex-col justify-center md:justify-start text-xs gap-1'
    >
      <div>
        <motion.p
          variants={item}
          rel='noopener noreferrer'
          className='icon-link text-xs flex items-center gap-2 select-none'
        >
          johnlingbusiness[at]gmail[dot]com
        </motion.p>
      </div>
      <div className='flex items-center'>
        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://github.com/John-Ling/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            GitHub
          </motion.a>
        </div>

        <motion.div variants={item} className='border-grey-light border-[0.25px] h-4 ml-2 mr-2' />

        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://www.linkedin.com/in/john-ling-721721243/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            LinkedIn
          </motion.a>
        </div>

        <motion.div variants={item} className='border-grey-light border-[0.25px] h-4 ml-2 mr-2' />

        <div className='hover:text-orange transition-colors'>
          <motion.a
            variants={item}
            href='https://drive.google.com/file/d/1y_VlkkFUaFXCCYF-WO-EDnCOfMHy_F90/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link flex items-center gap-2'
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
