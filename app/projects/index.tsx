"use client";
import { useState, useEffect } from "react";
import { projects } from "./projects";
import ProjectListCard from "@/components/projects/project_list_card";
import ProjectModal from "@/components/projects/project_modal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [opened, setOpened] = useState<boolean>(false);

  // allow user to use ESC key to leave project card
  useEffect(() => {
    const on_escape = (event: KeyboardEvent) => {
      if (event.isComposing || event.key === "Escape") {
        setOpened(false);
      }
      return;
    };

    document.addEventListener("keydown", on_escape);
    return () => {
      document.removeEventListener("keydown", on_escape);
    };
  }, []);

  const on_project_select = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
    return;
  };

  const on_close = () => {
    setOpened(false);
    return;
  };

  return (
    <>
      {opened && selectedProject !== undefined && (
        <ProjectModal project={selectedProject} on_close={on_close} />
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
              <ProjectListCard
                key={i}
                project={project}
                position={i}
                on_select={on_project_select}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
