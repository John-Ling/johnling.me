"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";
import { projects } from "@/lib/projects";
import useProjectModal from "@/hooks/useProjectModal";

export default function Projects() {
  const { selectedProject, modalOpened, onProjectSelect, onClose } = useProjectModal();

  const featuredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase() === "ramble" ||
      project.title.toLowerCase() === "trello tabliss integration" ||
      project.title.toLowerCase() === "pseudocode compiler" ||
      project.title.toLowerCase() === "internship project: rag system"
  );

  return (
    <>
      <AnimatePresence>
        {modalOpened && selectedProject !== undefined && (
          <ProjectModal project={selectedProject} on_close={onClose} />
        )}
      </AnimatePresence>

      <motion.section className='h-4/5 flex flex-col mx-auto mt-10 w-10/12 md:w-9/12 z-30'>
        <h2 className='text-2xl md:text-3xl mb-3 mt-3 font-bold font-serif'>
          Some of My <span className='text-orange'>Favourite Projects</span>
        </h2>
        <motion.div className='grid grid-cols-1 grid-row-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
          {featuredProjects.map((project, i) => {
            return (
              <ProjectListCard
                project={project}
                position={i}
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
