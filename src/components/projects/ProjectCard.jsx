import PropTypes from "prop-types"

import './ProjectCard.css';

const ProjectCard = ({ image, title, description, tools, website, github }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tools">
        {tools.map((tool, index) => (
          <span key={index} className="tool">{tool}</span>
        ))}
      </div>
      <div className="buttons">
        <a href={website} className="button website" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe"></i> Website
        </a>
        <a href={github} className="button github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  description: PropTypes.any,
  github: PropTypes.any,
  image: PropTypes.any,
  title: PropTypes.any,
  tools: PropTypes.shape({
    map: PropTypes.func
  }),
  website: PropTypes.any
}

export default ProjectCard;
