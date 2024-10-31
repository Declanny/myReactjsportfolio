
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  // Add more project objects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <h4>Here are some of the projects I've worked on.</h4>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
