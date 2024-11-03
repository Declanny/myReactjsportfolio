
import './Projects.css';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730661445/Screenshot_2024-11-03_at_8.17.11_PM_l31kz5.png",
    title: "Liben",
    description: "Liben is ",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730661646/Screenshot_2024-11-03_at_8.20.26_PM_xnrqyd.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730661871/Screenshot_2024-11-03_at_8.24.11_PM_klnrwm.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730662099/Screenshot_2024-11-03_at_8.28.04_PM_h0dzxg.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730662594/Screenshot_2024-11-03_at_8.36.15_PM_ozlukq.png",
    title: "Project One",
    description: "This is a project that does X, Y, and Z.",
    tools: ["React", "CSS", "JavaScript", "Node.js", "MongoDB"],
    website: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730663005/Screenshot_2024-11-03_at_8.42.49_PM_kpylcg.png",
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
      <h4>Here are some of the projects I&apos;ve worked on.</h4>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
