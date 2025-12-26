import { Project } from "@/types/projects/project";
import Image from "next/image";

interface ProjectListCardProps {
  project: Project;
  position: number;
  on_select: (project: Project) => void;
}

export default function ProjectListCard({ project, position, on_select }: ProjectListCardProps) {
  const maxTagCount = 3;
  const colours: string[] = [
    "text-blue",
    "text-magenta",
    "text-teal",
    "text-green",
    "text-yellow",
    "text-orange-light",
    "text-red"
  ];
  const colourClass: string = colours[position % colours.length];
  const projectFolder = `/images/projects/${project.imageFolder}/0.png`;

  const on_click = () => {
    on_select(project);
  };

  return (
    <>
      <div
        className='bg-grey-card border-2 rounded-lg border-grey-light p-3 opacity-0 animate-fade-up h-90'
        style={{ animationDelay: `${(position + 1) * 150}ms` }}
      >
        <h2 onClick={on_click} className={`text-lg mb-2 mt-2 select-none ${colourClass}`}>
          {project.title}
        </h2>
        <h3 className='text-xs mb-2 text-muted-white'>{project.shortDescription}</h3>
        {project.imageFolder === null ? (
          <p>{project.description}</p> // if no image exists just render text
        ) : (
          <div className='overflow-hidden border-2 rounded-lg border-grey-light'>
            <Image
              className='transition-all duration-500 hover:scale-105 hover:cursor-pointer border-0 rounded-none'
              alt='Project image'
              src={projectFolder}
              width={1280}
              height={720}
              onClick={on_click}
            />
          </div>
        )}
        <ul className='flex flex-wrap mt-1 mb-2'>
          {project.tags.map((tag: string, index) => {
            if (index < maxTagCount) {
              return (
                <li key={tag} className='p-1 text-xs'>
                  <span className='bg-grey-light border-1 pl-1 pr-1 pointer-events-none'>
                    {tag}
                  </span>
                </li>
              );
            } else if (index === maxTagCount) {
              return (
                <li key={"..."} className='p-1 text-xs'>
                  <span className='pl-1 pr-1 select-none pointer-events-none'>...</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
