"use client";
import { useState, useEffect, useRef } from "react";
import { projects } from "./projects";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [opened, setOpened] = useState<boolean>(false);
  const projectCardRef = useRef(null);

  // allow user to use ESC key to leave project card
  useEffect(() => {
    const on_escape = (event: KeyboardEvent) => {
      if (event.isComposing || event.key === "Escape") {
        setOpened(false);
      }
      return;
    }

    document.addEventListener("keydown", on_escape);
    return () => {
      document.removeEventListener("keydown", on_escape);
    }
  }, []);

  const on_project_select = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
    return;
  }

  const on_close = () => {
    setOpened(false);
    return;
  }

  return (
    <>
      { opened && selectedProject !== undefined ? <ProjectCard project={selectedProject} on_close={on_close}/> : null }
      <title>Projects</title>
      <div ref={projectCardRef} className="min-h-screen w-11/12 lg:w-10/12 mx-auto max-w-[1920px] font-meslo mt-5 mb-5">
        <h1 className={`text-4xl mt-5 mb-5 text-[#2e2e2e] animate-flicker-on font-mesloBold`} style={{animationDelay: "1000ms"}}>Projects</h1>
        <h2 className="text-2xl font-mesloBold">I&apos;ve done too many</h2>
        <h3 className="mb-5">Here are some of the best.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  opacity-0 animate-fade-up">  
          {projects.map((project: Project, i: number) => {
            return <ProjectItem key={i} project={project} position={i} on_select={on_project_select}/>
          })}
        </div>
      </div>
    </>
  )
}

interface ProjectItemProps {
  project: Project,
  position: number,
  on_select: (project: Project) => void,
}

function ProjectItem({ project, position, on_select }: ProjectItemProps) {
  const maxTagCount = 3
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange-light", "text-red"];
  const colourClass: string = colours[position % colours.length];
  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;

  const on_click = () => {
    on_select(project);
  }

  return (
    <>
      <div className="bg-grey-card border-2 border-grey-light p-3 opacity-0 animate-fade-up h-90" 
        style={{animationDelay: `${(position + 1) * 150}ms`}}
      >
        <h2 onClick={on_click} className={`text-lg mb-2 mt-2 font-mesloBold ${colourClass}`}>{project.title}</h2>
        <h3 className="text-xs mb-2 font-mesloItalic text-muted-white">{project.shortDescription}</h3>
        {project.imageFolder === null ? <p>{project.description}</p> // if no image exists just render text
          :
          <div className="overflow-hidden border-2 rounded-lg border-grey-light">
            <Image
              className="transition-all duration-500 hover:scale-105 hover:cursor-pointer border-0 rounded-none"
              alt="Project image" 
              src={projectFolder}
              width={1280}
              height={720}
              onClick={on_click}
            />
          </div>        
        }
        <ul className="flex flex-wrap mt-1 mb-2">
          {project.tags.map((tag: string, index) => {
              if (index < maxTagCount) {
                  return <li key={tag} className="p-1 text-xs"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
              } else  if (index === maxTagCount) {
                  return<li key={"..."} className="p-1 text-xs"><span className="pl-1 pr-1 select-none pointer-events-none">...</span></li>
              }
              return <></>
          })}
        </ul>
      </div>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  on_close: () => void;
}

function ProjectCard({project, on_close}: ProjectCardProps) {
  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;
  return (
  <>
    {/* darken background */}
    <div className="fixed top-0 w-full min-h-screen flex justify-center items-center z-20 font-meslo">
        <div className="absolute w-full h-full bg-grey-dark bg-opacity-80 z-30" onMouseDown={on_close}></div>
        <div className="bg-grey-dark border-2 border-grey-light p-3 animate-fade-up opacity-0 flex w-11/12 lg:w-10/12 h-5/6 flex-col lg:flex-row z-40">
          {/* button at top of card above picture for tablet and mobile */}
          <button className="block lg:hidden ml-auto w-fit mb-3 " onClick={on_close}>
              <CloseIcon className="hover:text-muted-white active:text-muted-white"/>
            </button>
          <div className="p-5 flex items-center justify-center">
            <Image className="border-2 rounded-lg" src={projectFolder} width={1280} height={720} alt="Project image" />
          </div>
          <div className="flex flex-col w-full lg:w-3/5 min-h-80">
            {/* button above description for desktop */}
            <button className="hidden lg:block ml-auto w-fit" onClick={on_close}>
              <CloseIcon className="hover:text-muted-white active:text-muted-white"/>
            </button>
            <h1 className={`text-xl md:text-2xl mb-2 mt-2 font-mesloBold`}>{project.title}</h1>
            <ul className="flex flex-wrap mt-1 mb-2 max-w-96">
              {project.tags.map((tag: string) => {
                return <li key={tag} className="p-1 mb-1 text-xs select-none"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
              })}
            </ul>
            <p className="mb-2 pb-1 pt-1 max-h-52 lg:max-h-fit overflow-y-auto">{project.description}</p>
            <Link className={`text-sm no-underline mb-2 w-fit ${project.sourceURL === null ? "pointer-events-none text-muted-white border-none" : "link"}`} 
              href={project.sourceURL !== null ? project.sourceURL : "/"} 
              target="_blank" rel="noopener"
              >
                See more
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
