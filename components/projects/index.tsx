"use client";
import { useState, useEffect, useRef } from "react";
import { Project, projects } from "./projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import { meslo } from "@/lib/font";


const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [opened, setOpened] = useState<boolean>(false);
  const projectCardRef = useRef(null);

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
        <h1 className={`text-4xl mt-5 mb-5 text-[#2e2e2e] animate-flicker-on ${meslo.variable} font-meslo`} style={{animationDelay: "1000ms"}}>Projects</h1>
        <h2 className="text-2xl">I&apos;ve done too many.</h2>
        <h3 className="mb-5">Here are some of the best.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  opacity-0 animate-fade-up">  
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
  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;

  return (
    <>
      <div className="bg-grey-card border-2 border-grey-light p-3 opacity-0 animate-fade-up h-90" 
        style={{animationDelay: `${(position + 1) * 150}ms`}}
      >
        <h2 className={`text-xl md:text-2xl mb-2 mt-2  ${meslo.variable} font-meslo ${colourClass}`}>{project.title}</h2>
        <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
        {project.imageFolder === null ? <p>{project.description}</p> // if no image exists just render text
          :
          <div className="overflow-hidden border-2 rounded-lg border-grey-light ">
            <Image
              className="transition-all duration-500 hover:scale-105 hover:cursor-pointer border-0 rounded-none"
              alt="Project image" 
              src={projectFolder}
              width={1280}
              height={720}
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
  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;
  return (
  <>
    {/* darken background */}
    <div className="fixed top-0 w-full min-h-screen flex justify-center items-center z-20">
        <div className="absolute w-full h-full bg-grey-dark bg-opacity-80 z-30" onMouseDown={handleClose}></div>
        <div className="bg-grey-dark border-2 border-grey-light p-3 animate-fade-up opacity-0 flex w-11/12 lg:w-10/12 h-5/6 flex-col lg:flex-row z-40">
          {/* button at top of card above picture for tablet and mobile */}
          <button className="block lg:hidden ml-auto w-fit mb-3 " onClick={handleClose}>
              <CloseIcon className="hover:text-muted-white active:text-muted-white"/>
            </button>
          <div className="mb-5 lg:mr-5">
            <Image src={projectFolder} width={1280} height={720} alt="Project image" />
          </div>
          <div className="flex flex-col w-full lg:w-2/5 min-h-80">
            {/* button above description for desktop */}
            <button className="hidden lg:block ml-auto w-fit" onClick={handleClose}>
              <CloseIcon className="hover:text-muted-white active:text-muted-white"/>
            </button>
            <h1 className={`text-xl md:text-2xl mb-2 mt-2 ${meslo.style} font-meslo`}>{project.title}</h1>
            <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
            <p className="mb-2 pb-1 pt-1 max-h-44 overflow-y-auto">{project.description}</p>
            <a className={`text-sm no-underline mb-2 w-fit ${project.sourceURL === null ? "pointer-events-none text-muted-white" : ""}`} 
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
