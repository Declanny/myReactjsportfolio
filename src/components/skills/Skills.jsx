
import './Skills.css';

const Skills = () => {
  const skillsList = [
    'JavaScript',
    'Typescript',
    'React',
    'Next.js',
    'Node.js',
    'CSS',
    'HTML',
    'Python',
    'Git',
    'Redux',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
  ];

  return (
    <div className="skills-page">
      <h1 className="skills-header">My Skills</h1>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <button key={index} className="skill-button">
            {skill}
          </button>
        ))}
      </div>
      <div className="orbital-circle">
        {/* External library component for the orbital circle goes here */}
      </div>
    </div>
  );
};

export default Skills;
