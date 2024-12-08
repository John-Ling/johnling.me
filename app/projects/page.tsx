
interface Project {
  title: string,
  dateRange: string,
  description: string,
  sourceURL: string,
};

const Page = () => {
  

  const projects: Project[] = [
    {
      title: "Website Rebuild", dateRange: "November 2024 - December 2024",
      description: "Rebuilt my website using React, NextJS and Tailwind. Added some cool gimmicks such as an ascii display component.",
      sourceURL: "https://github.com/John-Ling/johnling.me",
    },
    {
      title: "Pseudocode Compiler", dateRange: "October 2022 - May 2023",
      description: "Compiler built with C++ that translates pseudocode into Python",
      sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
    },
    {
      title: "ramble.johnling.me", dateRange: "April 2024 - April 2024",
      description: "Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university under team \"Cissa hackathon thing\"",
      sourceURL: "https://github.com/John-Ling/CODEBREW-2024",
    },
    {
      title: "Nixie Tube Watch", dateRange: "January 2024 - February 2024",
      description: "Ultimately scrapped project (watch was an actual brick). Designed my own circuitry to drive nixie tubes, wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip.",
      sourceURL: "https://github.com/John-Ling/Nixie-Watch",
    },
    {
      title: "Trello Tabliss Integration", dateRange: "January 2023 - May 2023",
      description: "Fork of browser extension Tabliss with Trello interoperability. Made with NodeJS, Firebase and React.",
      sourceURL: "https://github.com/John-Ling/Tabliss-Trello-Integration/tree/main/src/plugins/widgets/trello",
    },
    {
      title: "johnling.me", dateRange: "June 2022 - August 2022",
      description: "Personal website about me and my projects. Built using Bootstrap, Sass and sprinkle of Javascript.",
      sourceURL: "https://github.com/John-Ling/johnling.me",
    },
    {
      title: "Cameraman", dateRange: "November 2021 - Feburary 2022",
      description: "Uses microcontrollers, motor and OpenCV to track and follow a face in real-time. Filmed by Apple to promote their distinguished schools program.",
      sourceURL: "https://github.com/John-Ling/Cameraman",
    },
    {
      title: "CS Fundamentals", dateRange: "August 2021 - Present",
      description: "Ongoing code implementations of various data structures and algorithms. Recently made my own linked list library which is pretty cool.",
      sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    },
    {
      title: "Desktop Kahoot Bot", dateRange: "November 2021 - May 2022",
      description: "Homage to the first Kahoot Bot from 2019. Written in C# and used Winforms for the UI. Created a \"control panel\" where you could see the scores for each bot.",
      sourceURL: "https://github.com/John-Ling/Desktop-Kahoot-Bot",
    }
  ]
  return (
    <>
      <div className="min-h-screen w-3/4 m-auto">
        <div className="min-h-screen flex flex-wrap bg-grey-dark border-2 border-grey-light gap-x-2 gap-y-2 p-5 m-5">  
          {projects.map((project: Project, i: number) => {
            return <ProjectItem key={i} project={project} position={i}/>
          })}
        </div>
      </div>
    </>
  )
}

const ProjectItem: React.FC<{project: Project, position: number}> = ({ project, position }) => {
  const colours: string[] = ["text-blue", "text-magenta", "text-teal", "text-green", "text-yellow", "text-orange", "text-red"];
  const colourClass: string = colours[position % colours.length];
  return (
    <div className="bg-grey-normal flex-[1_0_32%] p-5">
      <h2 className={`text-2xl mb-2 mt-2 ${colourClass}`}>{project.title}</h2>
      <h3 className="text-sm mb-2">{project.dateRange}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default Page;