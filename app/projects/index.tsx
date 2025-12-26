"use client";
import { AnimatePresence, motion, stagger } from "framer-motion";
import { projects } from "../../lib/projects";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";
import useProjectModal from "@/hooks/useProjectModal";
import { Project } from "@/types/projects/project";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.15)
    }
  }
};

const item = {
  hidden: { opacity: 0, transform: "translateY(8px)" },
  show: { opacity: 1, transform: "translateY(0px)" }
};

export default function ProjectsPage() {
  const { selectedProject, modalOpened, onProjectSelect, onClose } = useProjectModal();
  return (
    <>
      <AnimatePresence>
        {modalOpened && selectedProject !== undefined && (
          <ProjectModal project={selectedProject} on_close={onClose} />
        )}
      </AnimatePresence>
      <title>Projects</title>
      <div className={`min-h-screen w-11/12 lg:w-10/12 mx-auto max-w-[1920px]`}>
        <h1 className={`text-4xl mb-5 text-orange`} style={{ animationDelay: "1000ms" }}>
          Projects
        </h1>
        <h2 className='text-2xl'>I&apos;ve done too many</h2>
        <h3 className='mb-5'>Here are some of them.</h3>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-11'
        >
          {projects.map((project: Project, i: number) => {
            return (
              <motion.span variants={item} key={i}>
                <ProjectListCard
                  key={i}
                  project={project}
                  position={i}
                  on_select={onProjectSelect}
                />
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
