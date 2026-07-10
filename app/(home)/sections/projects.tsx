"use client";

import { AnimatePresence, motion } from "framer-motion";
import { breakpointSmall } from "@/hooks/useMediaQuery";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";
import { projects } from "@/lib/projects";
import useProjectModal from "@/hooks/useProjectModal";

export default function Projects() {
  const { selectedProject, modalOpened, onProjectSelect, onClose } = useProjectModal();

  const featuredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase() === "minimalist journalling app" ||
      project.title.toLowerCase() === "open source project: tablissng" ||
      project.title.toLowerCase() === "ling-ux" ||
      project.title.toLowerCase() === "internship project: workflow builder"
  );

  return (
    <>
      <AnimatePresence>
        {modalOpened && selectedProject !== undefined && (
          <ProjectModal project={selectedProject} on_close={onClose} />
        )}
      </AnimatePresence>

      <motion.section className='h-4/5 flex flex-col mx-auto max-w-[1920px] w-11/12 lg:w-10/12 2xl:w-8/12 mt-10 mb-10  z-30'>
        <h2 className='text-3xl md:text-4xl mb-3 mt-3 font-bold font-serif text-left'>
          Some of My <span className='text-orange'>Favourite Projects</span>
        </h2>
        <motion.div className='grid grid-cols-1 grid-row-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
          {featuredProjects.map((project, i) => {
            return (
              <ProjectListCard
                project={project}
                position={i}
                cols={breakpointSmall() ? 1 : 2}
                on_select={onProjectSelect}
                key={project.title}
              />
            );
          })}
        </motion.div>
      </motion.section>
    </>
  );
}
