export interface Project {
    title: string,
    dateRange: string,
    description: string,
    imageFolder: string | null, // path to folder containing images
    sourceURL: string | null,
    tags: string[],
};

export const projects: Project[] = [
  {
    title: "Krux Infra (Internship Project 2)", dateRange: "November 2024 - February 2025",
    description: `
      Completed as part of my internship project to build the frontend for a trade application system. I collaborated with both a graphic designer and
      worked under the supervision of a senior engineer (both very cool guys). I picked up Angular and Formly in order to build the interface and got to brush up on my
      SCSS skills.`,
    imageFolder: "internship-2",
    sourceURL: null,
    tags: ["Angular", "Material UI", "Sass"],
  },
    {
      title: "johnling.me", dateRange: "November 2024 - December 2024",
      description: `
        Rebuilding my website using React, NextJS and Tailwind mainly to learn some newer web technologies, 
        partly to one-up my friend who was making his own website. 
        Added some cool gimmicks such as an ASCII display on the front page.`,
      imageFolder: "website-rebuild",
      sourceURL: "https://github.com/John-Ling/johnling.me",
      tags: ["React", "NextJS", "TailwindCSS", "Vercel"],
    },
    { title: "DSA Libraries", dateRange: "November 2024 - November 2024",
      description: `
      Got bored during the break so I changed my linked list implementation into a .so file
      Then I used that library to implement more libraries for queues, stacks, hash tables, BFS and DFS.
      `,
      imageFolder:  "dsa-libraries",
      sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
      tags: ["C", "Make"],
    }, 
    // {
    //   title: "More Algorithms and Data Structures", dateRange: "August 2024 - October 2024",
    //   description: `
    //     Spent most of the time studying and dealing with life stuff but killed some time implementing all the algorithms
    //     and data structures covered in my DSA course.`,
    //   imageFolder: "more-dsa",
    //   sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    //   tags: ["C"],
    // },
    {
      title: "ramble.johnling.me", dateRange: "April 2024 - April 2024",
      description: `
        Productivity / unintentional mental health app and winning submission to 2024 CODEBREW Hackathon at my university 
        under team \"Cissa hackathon thing\". Used Docker to deploy the app and
        had a whole trip through deployment hell getting it up.`,
        imageFolder: "ramble",
      sourceURL: "https://github.com/John-Ling/CODEBREW-2024",
      tags: ["Flask", "Docker", "React", "Sass", "NGINX"],
    },
    {
      title: "Nixie Tube Watch", dateRange: "January 2024 - February 2024",
      description: `
        Designed my own circuitry to drive nixie tubes, 
        wrote AVR C for the first time and built my own library to interface with a DS1302 timekeeping chip.
        Ultimately scrapped the project (watch was too thick) but might make a clock out of it.`,
      imageFolder: "nixie-watch",
      sourceURL: "https://github.com/John-Ling/Nixie-Watch",
      tags: ["ATmega328p", "AVR C", "Hardware"],
      
    },
    {
      title: "RAG System (Internship Project 1)", dateRange: "November 2023 - November 2023",
      description: `
        Fullstack web app and RAG system that allowed users ask questions and received tailored financial advice 
        for over 1000 Malaysian companies. I used Flask and React with MySQL to store \"metadata\" 
        about companies. Used Docker but never ended up deploying.`,
      imageFolder: "internship-1",
      sourceURL: "https://github.com/John-Ling/Internship-Project",
      tags: ["MySQL", "React", "Flask", "Sass", "Docker"],
    },
    {
      title: "wikihopper.johnling.me", dateRange: "July 2022 - July 2022",
      description: `
        React web game that finds two random wikipedia articles and challenges the user to navigate
        from one to another in 10 hops or less. Created because I wanted something fun to play on my phone.`,
      sourceURL: "https://github.com/John-Ling/wikipedia-hopper",
      imageFolder: "wikihopper",
      tags: ["React", "Sass"],
    },
    // {
    //   title: "Arduino Smart Lock", dateRange: "June 2023 - September 2023",
    //   description: `
    //     Created a low-power ATmega328p system that that used RFID to lock and unlock doors
    //     (my door specifically). Learned a bit about power saving in embedded systems which was cool.`,
    //   sourceURL: "https://github.com/John-Ling/Arduino-Smart-Lock",
    //   imageFolder: "smart-lock",
    //   tags: ["ATmega328p", "Arduino", "Hardware"],
    // },
    {
      title: "Trello Tabliss Integration", dateRange: "January 2023 - May 2023",
      description: `
        Fork of browser extension Tabliss with Trello interoperability. 
        Made with NodeJS, Firebase and React.
      `,
      sourceURL: "https://github.com/John-Ling/Tabliss-Trello-Integration/tree/main/src/plugins/widgets/trello",
      imageFolder: "trello",
      tags: ["React", "NodeJS", "Firebase", "Sass"],
    },
    {
      title: "Pseudocode Compiler", dateRange: "October 2022 - May 2023",
      description: `
        My best project IMO. Full Compiler built with C++ that translates pseudocode into Python. 
        I rolled my own lexer, parser and code generator which was really interesting to study. 
        I even added some basic type checking. Didn't like C++ though.`,
      imageFolder: "compiler",
      sourceURL: "https://github.com/John-Ling/Pseudocode-Compiler",
      tags: ["C++"],
    },
    // {
    //   title: "johnling.me", dateRange: "June 2022 - August 2022",
    //   description: `Personal website about me and my projects. Built using Bootstrap, Sass and a smattering of Javascript.`,
    //   sourceURL: "https://github.com/John-Ling/johnling.me",
    //   imageFolder: "johnling",
    //   tags: ["Bootstrap", "Sass", "Javascript", "NGINX"],
    // },
    {
      title: "Cameraman", dateRange: "November 2021 - February 2022",
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
      title: "Desktop Kahoot Bot", dateRange: "November 2021 - May 2022",
      description: `
        Homage to the first Kahoot Bot from 2019. Written in C# and used Winforms for the UI. 
        Created a \"control panel\" where you could see the scores for each bot.`,
      sourceURL: "https://github.com/John-Ling/Desktop-Kahoot-Bot",
      imageFolder: "kahoot-desktop",
      tags: ["C#", "Selenium", "Winforms"],
    },
    {
      title: "Python Kahoot Bot", dateRange: "September 2021 - November 2021",
      description: `
        Remake of my first Kahoot Bot from 2019, two years after starting programming. 
        This was also the first time I used Git.`,
      sourceURL: "https://github.com/John-Ling/Kahoot-Bot-Python",
      imageFolder: "kahoot-python",
      tags: ["Python", "Selenium"],
    },
    // {
    //   title: "CS Fundamentals", dateRange: "August 2021 - Present",
    //   description: `
    //     Ongoing code implementations of various data structures and algorithms in C. 
    //     Absolutely saved me during my algorithms course in University.`,
    //   sourceURL: "https://github.com/John-Ling/CS-Fundamentals",
    //   imageFolder: "fundamentals",
    //   tags: ["C"],
    // },
    // {
    //   title: "CS50", dateRange: "August 2021 - August 2022",
    //   description: `
    //     Completed Harvard's CS50 intro to computer science course while doing school.
    //     It was pretty hard but I learned a lot.
    //   `,
    //   sourceURL: null,
    //   imageFolder: "cs50",
    //   tags: ["C", "Python", "SQL", "HTML", "Javascript", "CSS"]
    // },
    // {
    //   title: "Linux Shenanigians", dateRange: "May 2020 - Present",
    //   description:  `
    //     Had time thanks for a worldwide pandemic so I installed Arch Linux and KDE plasma onto my computers.
    //     Learned a lot about Linux and had fun ricing my system.
    //     I even got GPU passthrough working on my system to run both Windows and macOS virtual machines with discrete graphics.
    //     Learned to compile my own kernel to get things working (ACS override).
    //     Spent way too much time I could have spent socialising but I had fun :)
    //   `,
    //   sourceURL: null,
    //   imageFolder: "linux",
    //   tags: ["Bash", "Linux", "KVM", "VFIO", "I", "Use", "Arch", "BTW"]
    // },
    // {
    //   title: "Covid Companion", dateRange: "February 2020 - March 2020",
    //   description: `
    //     Created for a \"code jam\" hosted by Replit back when we had nothing but time. 
    //     Tkinter desktop app that answered queries related to COVID using NLP. 
    //     I used Wit AI to determine intent and provided correct information.`,
    //   sourceURL: "https://github.com/John-Ling/Covid-Companion",
    //   imageFolder: "companion",
    //   tags: ["Python", "Tkinter", "BeautifulSoup"],
    // },
    // {
    //   title: "The Kahoot Bot™", dateRange: "September 2019 - September 2019",
    //   description: `
    //     The Original Kahoot Bot and my first project ever. 
    //     Filled with top quality code such as unintentional recursion, Singleton design (i used globals everywhere)
    //     and a codebase that boldly rejects OOP (i didn't know how to use classes).`,
    //   sourceURL: null,
    //   imageFolder: "kahoot-original",
    //   tags: ["Python", "Selenium"],
    // }
  ];
