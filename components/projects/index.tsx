"use client";
import { useState, useEffect, useRef } from "react";
import { Project, projects } from "./projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [opened, setOpened] = useState<boolean>(false);
  const projectCardRef = useRef<any>(null);

  // allow user to use ESC key to leave project card
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.isComposing || event.key === "Escape") {
        setOpened(false);
      }
      return;
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    }
  }, []);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
    return;
  }

  const closeCard = () => {
    setOpened(false);
    return;
  }

  return (
    <>
      { opened && selectedProject !== undefined ? 
          <span>
            <ProjectCard project={selectedProject} handleClose={closeCard}/>
            </span> 
        : <></>
      }
      <div ref={projectCardRef} className="min-h-screen w-11/12 lg:w-10/12 m-auto mt-5 mb-5 ">
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
      <div className="bg-grey-normal border-2 border-grey-light p-3 opacity-0 animate-fade-up h-90" 
        style={{animationDelay: `${(position + 1) * 150}ms`}}
      >
        <h2 className={`text-xl md:text-2xl mb-2 mt-2 ${colourClass}`}>{project.title}</h2>
        <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
        {project.imageFolder === null ? <p className="w-100 h-80">{project.description}</p> // if no image exists just render text
          :
          <div className="overflow-hidden border-2 border-grey-light relative w-100 h-80">
            <Image
              className="transition-all duration-500 hover:scale-110 hover:cursor-pointer border-0"
              alt="Project image" 
              src={`${project.imageFolder}/0.png`}
              fill
              style={{objectFit: "cover"}}
              onClick={() => handleSelect(project)}
            />
          </div>        
        }
      <ul className="flex flex-wrap mt-1 mb-2">
        {project.tags.map((tag: string) => {
          return <li key={tag} className="p-1 text-sm"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
        })}
      </ul>
      </div>
    </>
  );
}

const ProjectCard: React.FC<{project: Project, handleClose: () => void}> = ({project, handleClose}) => {
  return (
    <>
      <div className="bg-grey-dark bg-opacity-80 fixed top-0 w-full min-h-screen z-20 flex justify-center items-center">
        <div className="bg-grey-dark border-2 border-grey-light p-5 animate-fade-up opacity-0 flex w-8/12 ">

          <div className="relative w-3/5 h-30 mr-5">
            <Image src={`${project.imageFolder}/0.png`} fill style={{objectFit: "contain"}} alt="Project image" />
          </div>
          <div className="flex flex-col w-2/5 min-h-80">
            <button className="ml-auto w-fit" onClick={handleClose}><CloseIcon className="active:text-muted-white"/></button>
            <h1 className="text-xl md:text-2xl mb-2 mt-2">{project.title}</h1>
            <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
            <p className="mb-2">{project.description}</p>
            <a className={`text-sm no-underline mb-2 ${project.sourceURL === null ? "pointer-events-none text-muted-white" : ""}`} 
              href={project.sourceURL !== null ? project.sourceURL : "/"} 
              target="_blank" rel="noopener"
            >
              <GitHubIcon sx={{ fontSize: 20 }} /><span className="align-middle"> Github</span>
            </a>
            <ul className="flex flex-wrap mt-1 mb-2">
              {project.tags.map((tag: string) => {
                return <li key={tag} className="p-1 text-xs"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}