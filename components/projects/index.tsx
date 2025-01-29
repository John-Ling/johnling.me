"use client";
import { useState } from "react";
import { Project, projects } from "./projects";
import Image from "next/image";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    return;
  }

  return (
    <>
      <ProjectCard project={selectedProject}/>
      <div className="min-h-screen w-11/12 lg:w-10/12 m-auto mt-5 mb-5 ">
        <h1 className="text-4xl mt-5 mb-5">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  bg-grey-dark border-2 border-grey-light gap-5 p-5 opacity-0 animate-fade-up">  
          {projects.map((project: Project, i: number) => {
            return <ProjectItem key={i} project={project} position={i} handleSelect={handleProjectSelect}/>
          })}
        </div>
      </div>
      
    </>
  )
}

export default ProjectsPage;

interface ProjectItemProps {
  project: Project,
  position: number,
  handleSelect: (project: Project) => void,
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, position, handleSelect }) => {
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange-light", "text-red"];
  const colourClass: string = colours[position % colours.length];

  return (
    <>
      <div className="bg-grey-normal border-2 border-grey-light p-3 opacity-0 animate-fade-up" 
        style={{animationDelay: `${(position + 1) * 150}ms`}}
      >
        <h2 className={`text-xl md:text-2xl mb-2 mt-2 ${colourClass}`}>{project.title}</h2>
        <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
        <div className="overflow-hidden border-2 border-grey-light relative aspect-[16/9]">
          <Image
            className="transition-all duration-500 hover:scale-110 hover:cursor-pointer border-0"
            alt="Project image" 
            src="/images/projects/old_website.png" 
            fill
            style={{objectFit: "cover"}}
            onClick={() => handleSelect(project)}
          />
        </div>
        {/* <p className="mb-2">{project.description}</p> */}
        
        <a href={project.sourceURL} target="_blank" rel="noopener">Source Code</a>
        <ul className="flex flex-wrap mt-1 mb-2">
          {project.tags.map((tag: string) => {
            return <li key={tag} className="p-1 text-sm"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
          })}
        </ul>
        
      </div>
    </>
  );
}

const ProjectCard: React.FC<{project: Project | undefined}> = ({project}) => {
  return (
    <>
      {
      project === undefined ? <></>
        :
      <div className="bg-grey-dark bg-opacity-80 fixed top-0 w-full min-h-screen z-20 flex justify-center items-center">
        <div className="bg-grey-dark border-2 border-grey-light p-5 animate-fade-up opacity-0 flex">
          {/* <img src={`${project.imageFolder}/0.png`} alt="Project image" /> */}
          <h1>{project.title}</h1>
        </div>
      </div>
      }
    </>
  )
}