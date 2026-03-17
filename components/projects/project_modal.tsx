import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Project } from "@/types/projects/project";
import { breakpointSmall } from "@/hooks/useMediaQuery";

interface ProjectModalProps {
  project: Project;
  on_close: () => void;
}

export default function ProjectModal({ project, on_close }: ProjectModalProps) {
  const isMobile = breakpointSmall();

  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;
  return (
    <div className={`fixed top-0 w-full min-h-screen flex justify-center items-center z-40`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='absolute w-full h-full bg-grey-dark bg-opacity-80 z-70'
        onMouseDown={on_close}
      />
      <motion.div
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        exit={{ opacity: 0, transform: "translateY(8px)" }}
        className='bg-grey-dark border-2 rounded-lg border-grey-light p-3 w-11/12 lg:w-1/2  h-fit m-auto z-70'
      >
        {/* button at top of card above picture for tablet and mobile */}
        <button className='flex justify-end items-center w-full' onClick={on_close}>
          <CloseIcon className='hover:text-muted-white active:text-muted-white' />
        </button>
        <div className='lg:px-20 mx-auto'>
          <div className='lg:max-w-3xl flex items-center justify-center my-4'>
            <Image
              className='rounded-lg'
              src={projectFolder}
              width={1920}
              height={1080}
              alt='Project image'
            />
          </div>
          <div className='flex flex-col w-full'>
            {!isMobile && (
              <ul className='flex flex-wrap'>
                {project.tags.map((tag: string) => {
                  return (
                    <li key={tag} className='p-1 mb-1 text-xs select-none'>
                      <span className='bg-grey-light border-1 pl-1 pr-1 rounded-sm'>{tag}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className='whitespace-pre-line mt-2 mb-2 max-h-52 md:max-h-none overflow-y-auto md:overflow-y-visible'>
              {project.description}
            </p>
            <Link
              className={`text-sm font-mono no-underline mb-2 w-fit ${!project.sourceURL ? "pointer-events-none text-muted-white border-none" : "link"}`}
              href={project.sourceURL ? project.sourceURL : "/"}
              target='_blank'
              rel='noopener'
            >
              {project.sourceLabel}
            </Link>
            {isMobile && (
              <ul className='flex flex-wrap'>
                {project.tags.map((tag: string) => {
                  return (
                    <li key={tag} className='p-1 mb-1 text-xs select-none'>
                      <span className='bg-grey-light border-1 pl-1 pr-1 rounded-sm'>{tag}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
