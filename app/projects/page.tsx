
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
      description: "Rebuilding my website using React, NextJS and Tailwind mainly to learn some newer web technologies, partly to one-up my friend who was making his own website. Added some cool gimmicks such as an ASCII display on the front page.",
      sourceURL: "https://github.com/John-Ling/johnling.me",
    },
    {
      title: "ramble.johnling.me", dateRange: "April 2024 - April 2024",
      description: "Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university under team \"Cissa hackathon thing\". Used Docker to deploy the app and had a whole trip through deployment hell getting it up.",
      sourceURL: "https://github.com/John-Ling/CODEBREW-2024",
    },
    {
      title: "Nixie Tube Watch", dateRange: "January 2024 - February 2024",
      description: "Ultimately scrapped project (watch was too thick). Designed my own circuitry to drive nixie tubes, wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip.",
      sourceURL: "https://github.com/John-Ling/Nixie-Watch",
    },
    {
      title: "Internship Project", dateRange: "November 2023 - November 2023",
      description: "Fullstack web app that allowed users ask questions and received tailored financial advice for over 1000 Malaysian companies. I used Flask and React with MySQL to store \"metadata\" about companies. Used Docker but never ended up deploying.",
      sourceURL: "https://github.com/John-Ling/Internship-Project",
    },
    {
      title: "wikihopper.johnling.me", dateRange: "July 2022 - July 2023",
      description: "React web game that finds two random wikipedia articles and challenges the user to navigate from one to another in 10 hops or less. Created because I wanted something fun to play on my phone.",
      sourceURL: "https://github.com/John-Ling/wikipedia-hopper"
    },
    {
      title: "Arduino Smart Lock", dateRange: "June 2023 - September 2023",
      description: "Created a low-power ATmega328p system that that used RFID to lock and unlock doors (my door specifically). Learned a bit about power saving in embedded systems which was cool.",
      sourceURL: "https://github.com/John-Ling/Arduino-Smart-Lock"
    },
    {
      title: "Trello Tabliss Integration", dateRange: "January 2023 - May 2023",
      description: "Fork of browser extension Tabliss with Trello interoperability. Made with NodeJS, Firebase and React.",
      sourceURL: "https://github.com/John-Ling/Tabliss-Trello-Integration/tree/main/src/plugins/widgets/trello",
    },
    {
      title: "Pseudocode Compiler", dateRange: "October 2022 - May 2023",
      description: "My best project IMO. Full Compiler built with C++ that translates pseudocode into Python. I rolled my own lexer, parser and code generator which was really interesting to study. I even added some basic type checking.",
      sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
    },
    {
      title: "johnling.me", dateRange: "June 2022 - August 2022",
      description: "Personal website about me and my projects. Built using Bootstrap, Sass and a smattering of Javascript.",
      sourceURL: "https://github.com/John-Ling/johnling.me",
    },
    {
      title: "Cameraman", dateRange: "November 2021 - Feburary 2022",
      description: "Uses microcontrollers, motor and OpenCV to track and follow a face in real-time. Filmed by Apple to promote their distinguished schools program.",
      sourceURL: "https://github.com/John-Ling/Cameraman",
    },
    {
      title: "CS Fundamentals", dateRange: "August 2021 - Present",
      description: "Ongoing code implementations of various data structures and algorithms. Recently made my own linked list library which is pretty cool. Absolutely saved me for my algorithms course in University.",
      sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    },
    {
      title: "Desktop Kahoot Bot", dateRange: "November 2021 - May 2022",
      description: "Homage to the first Kahoot Bot from 2019. Written in C# and used Winforms for the UI. Created a \"control panel\" where you could see the scores for each bot.",
      sourceURL: "https://github.com/John-Ling/Desktop-Kahoot-Bot",
    },
    {
      title: "Python Kahoot Bot", dateRange: "September 2021 - November 2021",
      description: "Remake of my first Kahoot Bot from 2019, two years after starting programming. This was also the first time I used Git.",
      sourceURL: "https://github.com/John-Ling/Kahoot-Bot-Python",
    },
    {
      title: "CS Fundamentals", dateRange: "August 2021 - Present",
      description: "Ongoing code implementations of various data structures and algorithms. Recently made my own linked list library which is pretty cool. Absolutely saved me for my algorithms course in University.",
      sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    },
    {
      title: "Prompt Pal", dateRange: "August 2021 - August 2021",
      description: "Really dumb little Android app I cobbled together in 2 days. Submitted it as part of a programming contest. Somehow we placed third.",
      sourceURL: "https://github.com/John-Ling/Prompt-Pal"
    },
    {
      title: "Covid Companion", dateRange: "February 2020 - March 2020",
      description: "Created for a \"code jam\" hosted by Replit back when we had nothing but time. Tkinter desktop app that answered queries related to COVID using NLP. I used Wit AI to determine intent and provided correct information.",
      sourceURL: "https://github.com/John-Ling/Covid-Companion"
    },
    {
      title: "The Kahoot Bot™", dateRange: "September 2019 - September 2019",
      description: "The Original Kahoot Bot and my first project ever. Filled with top quality code such as unintentional recursion and a codebase that boldly rejects OOP (I didn't know about classes).",
      sourceURL: "No source code here"
    }
  ];

  return (
    <>
      <div className="min-h-screen lg:w-3/4 m-auto">
        <div className="grid grid-cols-3 bg-grey-dark border-2 border-grey-light gap-5 p-5 m-5">  
          {projects.map((project: Project, i: number) => {
            return <ProjectItem key={i} project={project} position={i} />
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
    <div className={`bg-grey-normal border-2 border-grey-light p-3 opacity-0 animate-fade-up [--delay:${100 * (position + 1)}ms]`}>
      <h2 className={`text-2xl mb-2 mt-2 ${colourClass}`}>{project.title}</h2>
      <h3 className="text-sm mb-2">{project.dateRange}</h3>
      <p className="mb-2">{project.description}</p>
      <a href={project.sourceURL}>Source Code</a>
    </div>
  );
}

export default Page;