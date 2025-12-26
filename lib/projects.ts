import { Project } from "@/types/projects/project";

export const projects: Project[] = [
  {
    title: "ramble",
    shortDescription: "Analytics driven journalling app",
    description: `
      Finally got around to rebuilding Ramble into how I imagined it. It's a full-stack journalling app with a simple, uncluttered interface in created with ShadCN UI. 
      Alongside being a generally good journalling app (for me), I fine-tuned Longformer to perform emotion classification on entries and used Recharts to plot emotional data.
      Inspired by a paper, the main idea was to be able to give users a more analytical approach to observing how their own emotions change.`,
    imageFolder: "ramble-2",
    sourceURL: "https://www.linkedin.com/feed/update/urn:li:activity:7368825185765883904/",
    sourceLabel: "LinkedIn",
    tags: [
      "NextJS",
      "ShadCN UI",
      "FastAPI",
      "Transformers",
      "TailwindCSS",
      "MongoDB",
      "NextAuth",
      "Redis",
      "Vercel"
    ]
  },
  {
    title: "Trello Tabliss Integration",
    shortDescription: "Integrating Trello into my browser",
    description: `
        Fork of browser extension TablissNG with Trello interoperability. 
        I found that having to constantly visit the Trello website just to remind myself of my tasks hurt my focus and felt clunky.
        Now my Trello boards are shown to me directly in my browser homepage.
        Any changes I make to my personal board are are reflected in the UI.
        It was a good practice in gracefully handling errors, optimistic UI updates and other UX stuff.
        Currently trying to get my changes merged into upstream.
      `,
    sourceURL: "https://github.com/John-Ling/TablissNG/tree/main/src/plugins/widgets/trello",
    imageFolder: "trello",
    sourceLabel: "GitHub",
    tags: ["React", "Sass", "Zustand"]
  },
  {
    title: "Internship Project: Krux Infra",
    shortDescription: "Credit application system frontend work",
    description: `
      Completed as part of my internship project to build the frontend for a trade application system. I collaborated with both a graphic designer and
      worked under the supervision of a senior engineer (both very cool guys). I picked up Angular and Formly in order to build the interface and got to brush up on my
      SCSS skills.`,
    imageFolder: "internship-2",
    sourceURL: null,
    sourceLabel: null,
    tags: ["Angular", "Material UI", "Sass"]
  },
  {
    title: "Pseudocode Compiler",
    shortDescription: "Non-optimising compiler built from scratch",
    description: `
        Toy compiler built with C++ that translates pseudocode into Python. 
        I rolled my own lexer, parser and code generator which was really interesting to study. 
        I even added some basic type checking. Didn't like C++ though.`,
    imageFolder: "compiler",
    sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
    sourceLabel: "GitHub",
    tags: ["C++", "Make"]
  },
  {
    title: "Internship Project: RAG System",
    shortDescription: "RAG system for over 1000 companies",
    description: `
        Fullstack web app and RAG system that allowed users ask questions and received tailored financial advice 
        for over 1000 Malaysian companies. I used Flask and React with MySQL to store "metadata" 
        about companies. Used Docker but never ended up deploying.`,
    imageFolder: "internship-1",
    sourceURL: null,
    sourceLabel: null,
    tags: ["MySQL", "Docker", "React", "Vite", "Flask", "Langchain", "Sass"]
  },
  {
    title: "University AI Discovery Tool",
    shortDescription: "Helping to get a university project off the ground!",
    description: `
      Currently, I'm doing volunteer work with the Data Science club at my university to launch a platform that helps students to find like-minded peers via AI 
      semantic search and clubs/events via an ingestion-aggregation pipeline and smart recommendation systems. I'm in charge of events/clubs so I've been building frontends to create events, 
      writing paginated route handlers to fetch them and cleaning up the existing codebase.
      It's not difficult work but I'm happy to help out where I can.
    `,
    imageFolder: "connect3",
    sourceURL: "https://connect3.app/",
    sourceLabel: "Try it out",
    tags: ["NextJS", "Supabase", "TailwindCSS"]
  },
  {
    title: "ramble.johnling.me",
    shortDescription: "Winning hackathon project",
    description: `
        Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university 
        under team "Cissa hackathon thing". Used Docker to deploy the app and
        had a whole trip through deployment hell getting it up.`,
    imageFolder: "ramble",
    sourceURL: "https://github.com/John-Ling/CODEBREW-2024",
    sourceLabel: "GitHub",
    tags: ["Flask", "Docker", "React", "Sass", "NGINX"]
  },
  {
    title: "Markov Chain Text Generator",
    shortDescription: "It's ChatGPT, but ✨ dumb(er) ✨",
    description: `
      Used my hash table library to put together a program that builds an order N Markov model from a corpus and generate text with it.
      I hated my probability class but this topic seemed interesting so I did something with it. 
      `,
    imageFolder: "markov",
    sourceURL: "https://github.com/John-Ling/markov-chain-text-generator",
    sourceLabel: "GitHub",
    tags: ["C", "Make"]
  },
  {
    title: "Nixie Tube Watch",
    shortDescription: "Building circuits with old Soviet technology",
    description: `
        Designed my own circuitry to drive nixie tubes, 
        wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip.
        Ultimately scrapped the project (watch was too thick) but might make a clock out of it.`,
    imageFolder: "nixie-watch",
    sourceURL: "https://github.com/John-Ling/Nixie-Watch",
    sourceLabel: "GitHub",
    tags: ["ATmega328p", "AVR C", "Hardware"]
  },
  {
    title: "Portfolio Website",
    shortDescription: "Website and technical blog",
    description: `
    My friend was making his own portfolio with NextJS and Tailwind so naturally, I had to try one-up him. Added an ascii-based lorenz attractor and
    started a technical blog that has since garnered ~800 monthly visitors and only 5% of them are bots! 
    `,
    imageFolder: "website-rebuild",
    sourceURL: null,
    sourceLabel: "No link. You're already here :)",
    tags: ["NextJS", "TailwindCSS", "Vercel"]
  },
  {
    title: "Data Structures and Algorithms",
    shortDescription: "Implementing data structures and algorithms in C",
    description: `
      Implemented all the algorithms and data structures taught in my introductory algorithms class. I got bored over the break I rewrote some of my implementations into libraries and compiled them into shared objects.
      Currently implementing slightly more advanced structures such as a Skip List and Patricia trie.

      Current project: Bloom Filter
      Next Project: Dijkstra's Algorithm
      `,
    imageFolder: "dsa-libraries",
    sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    sourceLabel: "GitHub",
    tags: ["C", "Make"]
  },
  {
    title: "wikihopper.johnling.me",
    shortDescription: "Lightweight web game made because I was bored",
    description: `
        React web game that finds two random wikipedia articles and challenges the user to navigate
        from one to another in 10 hops or less. Created because I wanted something fun to play on my phone.`,
    sourceURL: "https://wikihopper.johnling.me",
    sourceLabel: "Try it Out",
    imageFolder: "wikihopper",
    tags: ["React", "Sass", "Vite", "Docker", "NGINX"]
  },
  {
    title: "Cameraman",
    shortDescription: "Real-time tracking using OpenCV and motors",
    description: `Uses microcontrollers, 
      motors, OpenCV and a 3D printed case I designed to track and follow a face in real-time. 
      Filmed by Apple to promote their distinguished schools program. 
      Used simple haarcascades initially then transitioned to using a more robust Caffe model. 
      I also trialed Intel OpenVINO for better performance.`,
    sourceURL: "https://github.com/John-Ling/Cameraman",
    sourceLabel: "GitHub",
    imageFolder: "cameraman",
    tags: ["Arduino", "Python", "OpenCV", "Caffe", "OpenVINO", "Hardware"]
  },
  {
    title: "Desktop Kahoot Bot",
    shortDescription: "Winforms kind of good ngl",
    description: `
        Homage to the first Kahoot Bot from 2019. Written in C# and used Winforms for the UI. 
        Created a "control panel" where you could see the scores for each bot.`,
    sourceURL: "https://github.com/John-Ling/Desktop-Kahoot-Bot",
    imageFolder: "kahoot-desktop",
    sourceLabel: "GitHub",
    tags: ["C#", "Selenium", "Winforms"]
  },
  {
    title: "CS50",
    shortDescription: "David Malan is a great teacher",
    description: `
        Completed Harvard's CS50 intro to computer science course while doing school.
        It was pretty hard but I learned a lot.
      `,
    sourceURL: null,
    sourceLabel: null,
    imageFolder: "cs50",
    tags: ["C", "Python", "SQL", "HTML", "Javascript", "CSS"]
  }
];
