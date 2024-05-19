
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a pre-final year engineering student passionate about web development. Through internships and projects, I've gained hands-on experience in React, Node.js, MongoDB, and SQL. Currently deepening my understanding of React, I'm also proficient in Java, data structures, and algorithms. With a strong foundation in object-oriented programming, computer networks, operating systems, and database management systems, I'm eager to tackle new projects and contribute to innovative web solutions.`;

export const ABOUT_TEXT = `I am an enthusiastic and adaptable full stack developer with a fervor for crafting effective and intuitive web applications. I've garnered experience across various technologies, encompassing React, Node.js, MySQL, and MongoDB. My journey into web development sparked from a profound curiosity about systems' inner workings, evolving into a career where I continually deepen my knowledge and embrace new challenges. Thriving in collaborative settings, I relish tackling intricate problems to deliver top-notch solutions. Beyond coding, I stay active, delve into emerging technologies, and contribute to open-source initiatives, all while deepening my expertise further.`;

export const EXPERIENCES = [
  {
    year: "August 2023 - September 2023",
    role: "Full Stack Developer",
    company: "Matrix Computers",
    description: `I have gained practical experience working with HTML, CSS, and JavaScript, along with basic knowledge of backend development. I have successfully built and styled various web applications using these technologies.`,
    technologies: ["Javascript", "HTML", "CSS", "MongoDB", 'Express'],
  }
  
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects,exprience, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    getProjectLink: "https://google.com",
    sourceCodeLink: "https://github.com/dakshu04/React-portfolio"
  },

  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    getProjectLink: "https://google.com",
    sourceCodeLink: "https://google.com"
  },
  
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    getProjectLink: "https://google.com",
    sourceCodeLink: "https://google.com"
  },
  
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    getProjectLink: "https://google.com",
    sourceCodeLink: "https://google.com"
  },
];

export const CONTACT = {
  address: "Jain Pg Near JECRC Foundation College ",
  phoneNo: "6375363914",
  email: "purohitdaksh2003@gmail.com",
};
