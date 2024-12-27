import { Project, projects } from "./projects";

const Page = () => {
  return (
    <>
      <div className="min-h-screen w-11/12 m-auto mt-5 mb-5">
        <h1 className="text-4xl mt-5 mb-5">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  bg-grey-dark border-2 border-grey-light gap-5 p-5 opacity-0 animate-fade-up">  
          {projects.map((project: Project, i: number) => {
            return <ProjectItem key={i} project={project} position={i}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Page;

const ProjectItem: React.FC<{project: Project, position: number}> = ({ project, position }) => {
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange-light", "text-red"];
  const colourClass: string = colours[position % colours.length];
  return (
    <>
      <div className="bg-grey-normal border-2 border-grey-light p-3 opacity-0 animate-fade-up" 
        style={{animationDelay: `${(position + 1) * 150}ms`}}
      >
        <h2 className={`text-xl md:text-2xl mb-2 mt-2 ${colourClass}`}>{project.title}</h2>
        <h3 className="text-sm mb-2 italic text-muted-white">{project.dateRange}</h3>
        
        <p className="mb-2">{project.description}</p>
        <ul className="flex flex-wrap mt-1 mb-2">
          {project.tags.map((tag: string) => {
            return <li key={tag} className="p-1 text-sm"><span className="bg-grey-light border-1 pl-1 pr-1">{tag}</span></li>
          })}
        </ul>
        <a href={project.sourceURL}>Source Code</a>
        
      </div>
    </>
  );
}

