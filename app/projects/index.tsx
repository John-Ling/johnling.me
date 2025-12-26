"use client";
import { projects } from "../../lib/projects";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";
import useProjectModal from "@/hooks/useProjectModal";
import { Project } from "@/types/projects/project";

export default function ProjectsPage() {
  const { selectedProject, modalOpened, onProjectSelect, onClose } = useProjectModal();
  return (
    <>
      {modalOpened && selectedProject !== undefined && (
        <ProjectModal project={selectedProject} on_close={onClose} />
      )}
      <title>Projects</title>
      <div className={`min-h-screen w-11/12 lg:w-10/12 mx-auto max-w-[1920px]`}>
        <h1 className={`text-4xl mb-5 text-orange`} style={{ animationDelay: "1000ms" }}>
          Projects
        </h1>
        <h2 className='text-2xl'>I&apos;ve done too many</h2>
        <h3 className='mb-5'>Here are some of them.</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  opacity-0 animate-fade-up pb-11'>
          {projects.map((project: Project, i: number) => {
            return (
              <ProjectListCard key={i} project={project} position={i} on_select={onProjectSelect} />
            );
          })}
        </div>
      </div>
    </>
  );
}
