import { Project } from "@/types/projects/project";

export const projects: Project[] = [
  {
    title: "Internship Project: Workflow Builder",
    shortDescription: "n8n-like app for automating 3D data operations",
    description: `Created during my internship at Skand.

    Restored and added features to a non-functional codebase for a n8n-like workflow builder intended to be used for automating spatial data workflows. Worked with hexagonal architecture and GraphQL for the first time along with a significantly more advanced codebase. I worked on both the frontend and backend, liaising with two other engineers to ensure everything was as expected.

    Alongside technical work, I read up on project management via books like Shape Up and used it to better plan out my project.

    Received an offer post-internship to continue work as a contractor. 
    `,
    imageFolder: "internship-3",
    sourceURL: null,
    sourceLabel: null,
    tags: ["GraphQL", "React", "Koa", "MongoDB", "Tailwind", "Hatchet"]
  },
  {
    title: "Open Source Project: TablissNG",
    shortDescription: "Reimplementing Trello in a browser extension",
    description: `Fork of browser extension TablissNG with Trello interoperability. 

        I found that having to constantly visit the Trello website just to remind myself of my tasks hurt my focus and felt clunky. Now my Trello boards are shown to me directly in my browser homepage and any changes I make to my personal board are are reflected in the UI. I found it a good practice in gracefully handling errors, optimistic UI updates and other UX stuff.

        Got my changes merged into upstream and I've made it an ongoing project to reimplement every core feature of Trello into this extension.
      `,
    sourceURL:
      "https://chromewebstore.google.com/detail/tablissng/dlaogejjiafeobgofajdlkkhjlignalk",
    sourceLabel: "Try it out",
    imageFolder: "trello",
    tags: ["React", "Sass", "Zustand"]
  },
  {
    title: "Minimalist Journalling App",
    shortDescription: "Analytics-driven journalling app",
    description: `A full-stack journalling app with a simple, uncluttered interface in created with ShadCN UI. 

      Alongside being a generally good journalling app (for me), I fine-tuned Longformer to perform emotion classification on entries and used Recharts to plot emotional data.

      Inspired by a paper, the main idea was to be able to give users a more analytical approach to observing how their own emotions change.`,
    imageFolder: "ramble-2",
    sourceURL: "https://www.linkedin.com/feed/update/urn:li:activity:7368825185765883904/",
    sourceLabel: "LinkedIn",
    tags: [
      "NextJS + NextAuth",
      "FastAPI",
      "MongoDB",
      "Transformers",
      "Tailwind",
      "ShadCN UI",
      "Vercel"
    ]
  },
  {
    title: "Internship Project: RAG System",
    shortDescription: "RAG system for over 1000 companies",
    description: `Fullstack web app and RAG system that allowed users ask questions and received tailored financial advice for over 1000 Malaysian companies. I used Flask and React with MySQL to store "metadata" about companies.`,
    imageFolder: "internship-1",
    sourceURL: null,
    sourceLabel: null,
    tags: ["MySQL", "React", "Flask", "Langchain", "Sass"]
  },
  {
    title: "LING-UX",
    shortDescription: "Linux web terminal to showcase low-level projects",
    description: `Spent about a week building a Linux terminal in the browser to show off my C and C++ projects. On page load, the system spins up a bash instance running in Docker. Turns out you can expose the raw socket for a docker container and use it to stream IO between the server and client. A very neat trick indeed. 
      
      Deployed using Dokploy on my VPS.
    `,
    imageFolder: "lingux",
    sourceURL: "https://terminal.johnling.me",
    sourceLabel: "Try it out",
    tags: ["SocketIO", "FastAPI", "Docker", "Dokploy", "React"]
  },

  {
    title: "Club Project: connect3",
    shortDescription: "Super-app to help students find connection at university",
    description: `Currently, I'm doing volunteer work with the Data Science club at my university to launch and maintain a platform that helps students find friends, events and clubs by aggregating information and allowing them to search via LLMs. I learned a lot about interpersonal skills and working efficiently with others.

      Currently, we're building a ticketing system to replace the current one used by our university!
    `,
    imageFolder: "connect3",
    sourceURL: "https://connect3.app/",
    sourceLabel: "Try it out",
    tags: ["NextJS", "Supabase", "Tailwind", "Agentic Systems", "Figma"]
  },
  {
    title: "Nixie Tube Watch",
    shortDescription: "Building circuits with old Soviet technology",
    description: `Designed my own circuitry to drive nixie tubes, wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip. Ultimately scrapped the project (watch was too thick) but might make a clock out of it.`,
    imageFolder: "nixie-watch",
    sourceURL: "https://github.com/John-Ling/Nixie-Watch",
    sourceLabel: "GitHub",
    tags: ["ATmega328p", "AVR C", "Hardware"]
  },
  {
    title: "Pseudocode Compiler",
    shortDescription: "Scratch built, non-optimising compiler",
    description: `Toy compiler built with C++ that translates pseudocode into Python. 

        I rolled my own lexer, parser and code generator which was really interesting to study. I even added some basic type checking. 
        Didn't like C++ though.`,
    imageFolder: "compiler",
    sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
    sourceLabel: "GitHub",
    tags: ["C++", "Make"]
  },
  {
    title: "ramble.johnling.me",
    shortDescription: "Winning hackathon project",
    description: `Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university under team "Cissa hackathon thing". Used Docker to deploy the app and had a whole trip through deployment hell getting it up.`,
    imageFolder: "ramble",
    sourceURL: "https://devpost.com/software/ramble-zhqjpk",
    sourceLabel: "Devpost",
    tags: ["Flask", "Docker", "React", "Sass", "NGINX"]
  },
  {
    title: "Portfolio Website",
    shortDescription: "Website and technical blog",
    description: `My friend was making his own portfolio with NextJS and Tailwind so naturally, I had to try one-up him. Added an ascii-based lorenz attractor and started a technical blog that has since garnered ~1.1K monthly visitors (after accounting for bot traffic)`,
    imageFolder: "website-rebuild",
    sourceURL: null,
    sourceLabel: "No link. You're already here :)",
    tags: ["NextJS", "Tailwind", "Framer Motion", "Vercel"]
  },
  {
    title: "Markov Chain Text Generator",
    shortDescription: "It's ChatGPT, but ✨dumb✨",
    description: `Used my own hash table library to make a program that builds an order N Markov model from a corpus and generate text with it. I hated my probability class but this topic seemed interesting so I did something with it.`,
    imageFolder: "markov",
    sourceURL: "https://github.com/John-Ling/markov-chain-text-generator",
    sourceLabel: "GitHub",
    tags: ["C", "Make"]
  },
  {
    title: "Cameraman",
    shortDescription: "Real-time tracking using OpenCV and motors",
    description: `Uses microcontrollers,  motors, OpenCV and a 3D printed case I designed to track and follow a face in real-time. Filmed by Apple to promote their distinguished schools program. 

      Used simple haarcascades initially then transitioned to using a more robust Caffe model. I also trialed Intel OpenVINO for better performance.`,
    sourceURL: "https://github.com/John-Ling/Cameraman",
    sourceLabel: "GitHub",
    imageFolder: "cameraman",
    tags: ["Arduino", "Python", "OpenCV", "Caffe", "OpenVINO", "Hardware"]
  }
];
