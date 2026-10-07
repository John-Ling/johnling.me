import { Project } from "@/types/projects/project";

export const projects: Project[] = [
	{
		title: "Contract Work: Workflow Builder",
		shortDescription: "n8n-like app for automating 3D data operations",
		description: `During Summer in 2025, I worked at a 3D scanning startup named Skand where I was involved in the development of a workflow builder intended to be used for automating spatial data workflows. Worked with hexagonal architecture and GraphQL for the first time along with a significantly more advanced codebase. I worked on both the frontend and backend, liaising with two other engineers to ensure everything was as expected.

    Alongside technical work, I read up on project management via books like Shape Up and used it to better plan out my project. We tested the builder by creating a workflow to triage incoming bugs from Linear then dispatch a fix using Claude code. Last time I met my supervisor, the builder had been properly integrated as a production feature.
    `,
		imageFolder: "internship-3",
		sourceURL: null,
		sourceLabel: null,
		tags: ["GraphQL", "React", "Koa", "MongoDB", "Tailwind", "Hatchet"],
	},
	{
		title: "Open Source Project: TablissNG",
		shortDescription: "Reimplementing Trello in a browser extension",
		description: `Fork of browser extension TablissNG with my own Trello widget.

        I found that having to constantly visit the Trello website just to remind myself of my tasks hurt my focus and felt clunky. Now my Trello boards are shown to me directly in my browser homepage and any changes I make to my personal board are are reflected in the UI. To reduce dependencies on the project, I built my own basic drag-and-drop system. Overall, I've found it a good practice in gracefully handling errors, optimistic UI updates and other UX stuff.

        Got my changes merged into upstream and I've made it an ongoing project to reimplement every core feature of Trello into this extension.
      `,
		sourceURL: "https://chromewebstore.google.com/detail/tablissng/dlaogejjiafeobgofajdlkkhjlignalk",
		sourceLabel: "Try it out",
		imageFolder: "trello",
		tags: ["React", "Sass", "Zustand"],
	},

	{
		title: "Committee Work: connect3",
		shortDescription: "Platform to help students find connection at university",
		description: `In 2025, I did volunteer work with the Data Science club at my university to launch and maintain a platform that helps students find friends, events and clubs by aggregating information and allowing them to search via LLMs. My work was designing both the event aggregation system and implementing the events page UI, frequently communicating with designers and the project's lead. I learned a lot about interpersonal skills and working efficiently with others.
    `,
		imageFolder: "connect3",
		sourceURL: "https://connect3.app/",
		sourceLabel: "Try it out",
		tags: ["NextJS", "Supabase", "Tailwind", "Agentic Systems", "Figma"],
	},

	{
		title: "Internship Project: RAG System",
		shortDescription: "RAG system for over 100 companies",
		description: `Web-based RAG system that allowed users query information across the financial reports of over 100 Malaysian companies. A Python ingestion pipeline was also needed to collect the necessary data.`,
		imageFolder: "internship-1",
		sourceURL: null,
		sourceLabel: null,
		tags: ["MySQL", "React", "Flask", "Langchain", "Sass"],
	},
	{
		title: "LING-UX",
		shortDescription: "Linux web terminal to showcase low-level projects",
		description: `Spent about a week building a Linux terminal in the browser to show off my C, C++ and Rust projects. On page load, the system spins up a bash instance running in Docker. Turns out you can expose the raw socket for a docker container and use SocketIO to stream data between the socket and remote client. A very neat trick indeed. 
      
      Deployed using Dokploy on my VPS.
    `,
		imageFolder: "lingux",
		sourceURL: "https://terminal.johnling.me",
		sourceLabel: "Try it out",
		tags: ["SocketIO", "FastAPI", "Docker", "Dokploy", "React"],
	},

	{
		title: "Pseudocode Compiler",
		shortDescription: "Scratch-built, toy compiler",
		description: `Toy compiler built with C++ that translates pseudocode into Python. I rolled my own lexer, parser and code generator which was really interesting to study. I even added some basic type checking. 
	
        Didn't like C++ though.`,
		imageFolder: "compiler",
		sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
		sourceLabel: "GitHub",
		tags: ["C++", "Make"],
	},
	{
		title: "Nixie Tube Watch",
		shortDescription: "Building circuits with old Soviet technology",
		description: `Designed my own circuitry to drive nixie tubes, wrote AVR C for the first time to optimise for speed and fix a multiplexing flickering issue. I also built my own library to interface with a DS1302 timekeeping chip for fun. Ultimately scrapped the project (watch was too thick) but I'm currently making a clock out of it.`,
		imageFolder: "nixie-watch",
		sourceURL: "https://github.com/John-Ling/Nixie-Watch",
		sourceLabel: "GitHub",
		tags: ["ATmega328p", "AVR C", "Hardware"],
	},

	{
		title: "ramble.johnling.me",
		shortDescription: "Winning Hackathon Project",
		description: `Productivity / unintentional mental health app and winner of the "Best First Years" award at my university's biggest hackathon at my university under team "Cissa hackathon thing". Users would type, or ramble, about their busy schedules and we used Claude's API to generate a suggested timetable for them to use. 

		As one of my first React apps made in very little time without AI, the code is a little janky. Used Docker to deploy the app and had a whole trip through deployment hell getting it up.`,
		imageFolder: "ramble",
		sourceURL: "https://devpost.com/software/ramble-zhqjpk",
		sourceLabel: "Devpost",
		tags: ["Flask", "Docker", "React", "Sass", "NGINX"],
	},

	{
		title: "rot",
		shortDescription: "67 Programming Language",
		description: `I got so bored during a club meeting that I wrote a simulator for a Brainfuck-like language in Rust with an "interesting" new syntax. I later added support for generating x86-64 assembly. Didn't touch LLVM because it deserves better than to be used in this farcical stain of a project.`,
		imageFolder: "rot",
		sourceURL: "https://github.com/John-Ling/rot",
		sourceLabel: "GitHub",
		tags: ["Rust"],
	},
	{
		title: "Cameraman",
		shortDescription: "Real-time tracking using OpenCV and motors",
		description: `Uses microcontrollers,  motors, OpenCV and a 3D printed case I designed to track and follow a face in real-time. Filmed by Apple to promote their distinguished schools program. 

      Initially, I used simple haarcascades initially then transitioned to using a more robust Caffe model. I also trialed Intel OpenVINO for better performance.`,
		sourceURL: "https://github.com/John-Ling/Cameraman",
		sourceLabel: "GitHub",
		imageFolder: "cameraman",
		tags: ["Arduino", "Python", "OpenCV", "Caffe", "OpenVINO", "Hardware"],
	},
	{
		title: "Markov Chain Text Generator",
		shortDescription: "It's ChatGPT, but ✨dumb✨",
		description: `Used my own hash table library to make a program that builds an order N Markov model from a corpus and generate text with it. I hated my probability class but this topic seemed interesting so I did something with it.`,
		imageFolder: "markov",
		sourceURL: "https://github.com/John-Ling/markov-chain-text-generator",
		sourceLabel: "GitHub",
		tags: ["C", "Make"],
	},
	{
		title: "Portfolio Website",
		shortDescription: "Website and technical blog",
		description: `My friend was making his own portfolio with NextJS and Tailwind so naturally, I had to try one-up him. Added an ascii-based lorenz attractor and started a technical blog that has since garnered ~1.1K monthly visitors (after accounting for bot traffic)`,
		imageFolder: "website-rebuild",
		sourceURL: null,
		sourceLabel: "No link. You're already here :)",
		tags: ["NextJS", "Tailwind", "Framer Motion", "Vercel"],
	},
];
