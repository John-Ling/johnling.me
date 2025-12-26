import { motion } from "framer-motion";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";
import { projects } from "@/lib/projects";
import useProjectModal from "@/hooks/useProjectModal";

export default function ProjectSection() {
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
      {modalOpened && selectedProject !== undefined && (
        <ProjectModal project={selectedProject} on_close={onClose} />
      )}
      <motion.section className='h-3/5 flex flex-col mx-auto mt-5 w-10/12 md:w-8/12 z-30'>
        <div className='flex justify-between items-center'>
          <h3 className='text-3xl mb-3 mt-3 font-bold text-left'>
            Some of my favourite <span className='text-orange'>projects</span>
          </h3>
        </div>
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
