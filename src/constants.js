// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import Ybifoundation from "./assets/company_logo/ybi foundation.webp";
import Techno from "./assets/company_logo/techno.webp";
import Gsoc from "./assets/company_logo/gsoc.webp";


// Education Section Logo's

import schoolLogo from "./assets/education_logo/school logo.webp";
import collegeLogo from "./assets/education_logo/college logo.webp";
import pwSkillsLogo from "./assets/education_logo/pw-skills-logo.jpg";

// Project Section Logo's
import Foodwebsite from "./assets/work_logo/foodwebsite.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import TravelWebsite from "./assets/work_logo/travel website.png";
import Icoder from "./assets/work_logo/icoder.png";
import Tiktaktoe from "./assets/work_logo/tictaktoe.png";
import Todo_list from "./assets/work_logo/todolist.png";
import Web_dig from "./assets/work_logo/web_dig.png";
import Movie_png from "./assets/work_logo/movie_rec.png";
import ExpenseTracker from "./assets/work_logo/expensetracker.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Ybifoundation,
    role: "Machine Learning and Data Science Developer",
    company: "YBI Foundation",
    date: "October 2023 - November 2023",
    desc: "Worked on real-world machine learning projects involving data preprocessing, model training, and performance evaluation. Implemented prediction and classification algorithms, performed EDA, and visualized insights using Python. Gained hands-on experience with supervised learning, Jupyter Notebooks, and deploying ML models. Collaborated with mentors to optimize model accuracy through tuning and feature engineering.",

    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Jupyter Notebook",
    ],
  },
  {
    id: 1,
    img: Techno,
    role: "Web Developer Intern",
    company: "Techno Hacks Solutions",
    date: "March 2024 - May 2024",
    desc: "Contributed to innovative projects as a Web Developer Intern, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: Gsoc,
    role: "Open Source Contributor",
    company: "Girl Script Open Source Contribution",
    date: "September 2024 - November 2024",
    desc: "Contributed to open-source projects under the GirlScript Open Source Program by fixing bugs, improving UI components, and enhancing project functionality. Collaborated with global developers using Git and GitHub workflows, participated in issue discussions, created meaningful pull requests, and followed proper documentation and coding standards. Gained experience in real-world collaborative development, version control, and community-driven software building.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "GitHub",
      "Open Source Contribution",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: collegeLogo,
    school: "Rungta College of Engineering and Technology, Bhilai",
    date: "August 2023 - Present",
    grade: "7.94 CGPA",
    desc: "Pursuing Bachelor of Technology in Computer Science and Engineering with a strong focus on software development, data structures & algorithms, operating systems, database management, and computer networks. Gained hands-on experience through real-world projects in web development and participated actively in coding practice, hackathons, and tech events. Constantly learning modern tools and technologies to improve problem-solving skills and build scalable applications.",
    degree:
      "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  },


  {
    id: 1,
  img: pwSkillsLogo, 
  school: "PW Skills",
  date: "2023 - 2024",
  grade: "Completed - Merit Certification",
  degree: "Full-Stack Web Development & Professional Tech Training Program",
  desc: "Completed a structured full-stack web development program at PW Skills focused on building strong fundamentals in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Git/GitHub. Gained hands-on experience through real-world projects and weekly assignments, including responsive UI development, REST API creation, database handling, and deployment on cloud platforms. Developed strong problem-solving, debugging, and software engineering skills while following industry-standard coding practices and collaborative development workflows.",
},


  {
    id: 2,
    img: schoolLogo,
    school: "RMS High School, Khutadih",
    date: "April 2020 - March 2023",
    grade: "64.5%",
    desc: "Completed my Higher Secondary education with a specialization in the Science stream (PCM). Built strong concepts in Physics, Chemistry, and Mathematics while developing analytical thinking and problem-solving abilities. Actively participated in academic activities and maintained a consistent academic performance throughout the year.",
    degree: "Higher Secondary (Class XII) PCM with Computer Science",
  },

  {
    id: 3,
    img: schoolLogo,
    school: "RMS High School, Khutadih",
    date: "April 2018 - May 2020",
    grade: "84.5%",
    desc: "Completed my secondary education with strong academic performance, securing 84.5%. Developed a solid foundation in core subjects, particularly Mathematics and Science. Actively participated in school activities and maintained a disciplined academic record.",
    degree: "Matriculation (Class X) Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Travel Website",
    description:
      "A modern travel booking and exploration website built to help users discover destinations, explore packages, and view detailed travel guides. Designed with an attractive UI and smooth responsive layouts to provide an engaging travel browsing experience.",
    image: TravelWebsite,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
      "UI/UX",
      "Animations",
      "Flexbox/Grid",
    ],
    github: "https://github.com/sahutushar/travel-website",
    webapp: "https://imaginative-zabaione-9ca987.netlify.app",
  },
  {
    id: 1,
    title: "Food Delivery Website",
    description:
      "A food ordering and restaurant browsing website designed to provide a seamless food ordering experience similar to modern delivery platforms. Users can explore menus, view food cards, and enjoy a clean, responsive interface.",
    image: Foodwebsite,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
      "UI Components",
      "Food UI",
      "Modern Styling",
    ],
    github: "https://github.com/sahutushar/food-website",
    webapp: "https://bespoke-granita-6aee7c.netlify.app",
  },
  {
    id: 2,
    title: "iCoder Platform",
    description:
      "A coding education-themed platform built with HTML, CSS, and Bootstrap, offering sections for tutorials, blogs, and coding resources. Focused on responsive design and beginner-friendly UI development concepts.",
    image: Icoder,
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Responsive UI",
      "Component Design",
      "Clean UI",
    ],
    github: "https://velvety-gecko-2bfcb4.netlify.app/",
    webapp: "https://velvety-gecko-2bfcb4.netlify.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe web game built using JavaScript, offering two-player gameplay with real-time win detection, game status updates, and reset functionality. A simple yet effective project to strengthen logical thinking and DOM manipulation.",
    image: Tiktaktoe,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Game Logic",
      "DOM Manipulation",
      "ES6",
    ],
    github: "https://github.com/sahutushar/rock-paper-scizzor",
    webapp: "https://jade-sawine-0f43e6.netlify.app/",
  },
  {
    id: 4,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create custom tests. Includes user authentication, real-time scoring, detailed results, and profile stats to help students track progress and improve effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
      "JWT Auth",
      "State Management",
      "Responsive UI",
    ],
    github: "https://github.com/sahutushar/Complaint-management",
    webapp: "https://csprep.netlify.app/",
  },

  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A personal finance tracking application that allows users to add expenses and income, categorize entries, and dynamically calculate their balance. Built with local storage support to maintain data across sessions.",
    image: ExpenseTracker,
    tags: [
      "React JS",
      "JavaScript",
      "LocalStorage",
      "State Management",
      "Hooks",
      "Finance App",
    ],
    github: "https://dainty-dragon-4de2f5.netlify.app/",
    webapp: "https://dainty-dragon-4de2f5.netlify.app/",
  },
  {
    id: 6,
    title: "To-Do List App",
    description:
      "A simple and clean task management application that enables users to add, delete, and manage daily tasks. Stores data locally for persistent usage and offers a smooth and visually clean experience.",
    image: Todo_list,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "LocalStorage",
      "Productivity App",
    ],
    github: "https://dainty-travesseiro-2dacaf.netlify.app/",
    webapp: "https://dainty-travesseiro-2dacaf.netlify.app/",
  },
  {
    id: 7,
    title: "Webverse Digital",
    description:
      "A digital agency website designed with a clean interface and smooth animation flow, showcasing services and brand presence for online marketing. Built with visually appealing UI elements and motion effects.",
    image: Web_dig,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Framer Motion",
      "UI/UX",
      "Responsive UI",
      "Brand Website",
    ],
    github: "https://github.com/sahutushar/webverse-digital-clone",
    webapp: "https://webversedigitalclone.demo.com",
  },
  {
    id: 8,
    title: "Movie Recommendation App",
    description:
      "A movie suggestion platform that provides genre-based and trending movie recommendations using external APIs. Features search functionality, responsive layout, and a user-friendly design for movie lovers.",
    image: Movie_png,
    tags: [
      "React JS",
      "API Integration",
      "JavaScript",
      "Responsive UI",
      "Search Filter",
      "Hooks",
    ],
    github: "https://github.com/sahutushar/movie-recommendation",
    webapp: "https://movierecommendation.demo.com",
  },
];