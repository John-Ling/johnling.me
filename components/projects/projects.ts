export interface Project {
    title: string,
    shortDescription: string,
    description: string,
    imageFolder: string | null, // path to folder containing images
    sourceURL: string | null,
    tags: string[],
};

export const projects: Project[] = [
  {
    title: "RAMBLE", shortDescription: "Journalling with sophisticated emotional analytics",
    description: `
      Finally got around to rebuilding Ramble into how I imagined it. It's a full-stack journalling app with a simple, uncluttered interface in created with ShadCN UI. 
      Alongside being a generally good journalling app (for me), I fine-tuned Longformer to perform emotion classification on entries and used Recharts to plot emotional data.
      Inspired by a paper, the main idea was to be able to give users a more analytical approach to observing how their own emotions change.`,
    imageFolder: "ramble-2",
    sourceURL: null,
    tags: ["NextJS", "Shadcn UI", "FastAPI", "Transformers", "MongoDB", "NextAuth", "Redis", "Vercel", "Recharts"],
  },
  {
      title: "Trello Tabliss Integration", shortDescription: "Integrating Trello into my browser",
      description: `
        Fork of browser extension Tabliss with Trello interoperability. 
        Any changes I make to my personal Trello board are are reflected in the UI.
        Honestly it's really useful for figuring out what I need to do at the start of my day.
        Made with NodeJS, Firebase and React.
      `,
      sourceURL: "https://github.com/John-Ling/Tabliss-Trello-Integration/tree/main/src/plugins/widgets/trello",
      imageFolder: "trello",
      tags: ["React", "NodeJS", "Firebase", "Sass"],
    },
  {
    title: "Internship Project: Krux Infra", shortDescription: "Credit application system frontend work",
    description: `
      Completed as part of my internship project to build the frontend for a trade application system. I collaborated with both a graphic designer and
      worked under the supervision of a senior engineer (both very cool guys). I picked up Angular and Formly in order to build the interface and got to brush up on my
      SCSS skills.`,
    imageFolder: "internship-2",
    sourceURL: null,
    tags: ["Angular", "Material UI", "Sass"],
  },
  {
      title: "Pseudocode Compiler", shortDescription: "Non-optimising compiler built from scratch",
      description: `
        My best project IMO. Full Compiler built with C++ that translates pseudocode into Python. 
        I rolled my own lexer, parser and code generator which was really interesting to study. 
        I even added some basic type checking. Didn't like C++ though.`,
      imageFolder: "compiler",
      sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
      tags: ["C++", "Make"],
    },
    {
      title: "Internship Project: RAG System", shortDescription: "RAG system for over 100,000 companies",
      description: `
        Fullstack web app and RAG system that allowed users ask questions and received tailored financial advice 
        for over 1000 Malaysian companies. I used Flask and React with MySQL to store \"metadata\" 
        about companies. Used Docker but never ended up deploying.`,
      imageFolder: "internship-1",
      sourceURL: "https://github.com/John-Ling/Internship-Project",
      tags: ["MySQL", "Vite", "React", "Flask", "Langchain", "Sass", "Docker"],
    },
    {
      title: "ramble.johnling.me", shortDescription: "Winning hackathon project",
      description: `
        Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university 
        under team \"Cissa hackathon thing\". Used Docker to deploy the app and
        had a whole trip through deployment hell getting it up.`,
        imageFolder: "ramble",
      sourceURL: "https://github.com/John-Ling/CODEBREW-2024",
      tags: ["Flask", "Docker", "React", "Sass", "NGINX"],
    },
    { title: "Data Structures and Algorithms", shortDescription: "Implementing data structures and algorithms in C",
      description: `
      Implemented all the algorithms and data structures taught in my introductory algorithms class. I got bored over the break I rewrote some of my implementations into libraries and compiled them into shared objects.
      Currently implementing slightly more advanced structures such as a Skip List and Patricia trie.

      Current project: Bloom Filter
      Next Project: Dijkstra's Algorithm
      `,
      imageFolder:  "dsa-libraries",
      sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
      tags: ["C", "Make"],
    }, 
    {
      title: "Nixie Tube Watch", shortDescription: "Building circuits with old Soviet tech",
      description: `
        Designed my own circuitry to drive nixie tubes, 
        wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip.
        Ultimately scrapped the project (watch was too thick) but might make a clock out of it.`,
      imageFolder: "nixie-watch",
      sourceURL: "https://github.com/John-Ling/Nixie-Watch",
      tags: ["ATmega328p", "AVR C", "Hardware"],
      
    },
    {
      title: "wikihopper.johnling.me", shortDescription: "Lightweight web game made because I was bored",
      description: `
        React web game that finds two random wikipedia articles and challenges the user to navigate
        from one to another in 10 hops or less. Created because I wanted something fun to play on my phone.`,
      sourceURL: "https://github.com/John-Ling/wikipedia-hopper",
      imageFolder: "wikihopper",
      tags: ["React", "Sass", "Vite", "Docker", "NGINX"],
    },
    {
      title: "Cameraman", shortDescription: "Real-time tracking using OpenCV and motors",
      description: `Uses microcontrollers, 
      motors, OpenCV and a 3D printed case I designed to track and follow a face in real-time. 
      Filmed by Apple to promote their distinguished schools program. 
      Used simple haarcascades initially then transitioned to using a more robust Caffe model. 
      I also trialed Intel OpenVINO for better performance.`,
      sourceURL: "https://github.com/John-Ling/Cameraman",
      imageFolder: "cameraman",
      tags: ["Arduino", "Python", "OpenCV", "Caffe", "OpenVINO", "Hardware"],
    },
    {
      title: "Desktop Kahoot Bot", shortDescription: "Winforms kind of good ngl",
      description: `
        Homage to the first Kahoot Bot from 2019. Written in C# and used Winforms for the UI. 
        Created a \"control panel\" where you could see the scores for each bot.`,
      sourceURL: "https://github.com/John-Ling/Desktop-Kahoot-Bot",
      imageFolder: "kahoot-desktop",
      tags: ["C#", "Selenium", "Winforms"],
    },
    {
      title: "CS50", shortDescription: "David Malan is a great teacher",
      description: `
        Completed Harvard's CS50 intro to computer science course while doing school.
        It was pretty hard but I learned a lot.
      `,
      sourceURL: null,
      imageFolder: "cs50",
      tags: ["C", "Python", "SQL", "HTML", "Javascript", "CSS"]
    },
    // {
    //   title: "Covid Companion", shortDescription: "February 2020 - March 2020",
    //   description: `
    //     Created for a \"code jam\" hosted by Replit back when we had nothing but time. 
    //     Tkinter desktop app that answered queries related to COVID using NLP. 
    //     I used Wit AI to determine intent and provided correct information.`,
    //   sourceURL: "https://github.com/John-Ling/Covid-Companion",
    //   imageFolder: "companion",
    //   tags: ["Python", "Tkinter", "BeautifulSoup"],
    // },
    {
      title: "The Kahoot Bot™", shortDescription: "My first ever project :)",
      description: `
        The Original Kahoot Bot and my first project ever. 
        Filled with top quality code such as unintentional recursion, Singleton design (i used globals everywhere)
        and a codebase that boldly rejects OOP (i didn't know how to use classes).`,
      sourceURL: null,
      imageFolder: "kahoot-original",
      tags: ["Python", "Selenium"],
    }
  ];
