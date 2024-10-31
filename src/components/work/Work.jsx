import { useState } from 'react';
import './Work.css';

const workData = [
  {
    company: "Liben",
    jobTitle: "Backend Developer",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    startDate: "Jan 2024",
    endDate: "Ongoing",
    description: "Implemented a scalable backend solution, resulting in a 30% increase in system efficiency."
  },
  {
    company: "HomeAcq",
    jobTitle: "UI/UX Designer",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368840/Screenshot_2024-10-31_at_9.16.43_AM_sapnct.png",
    startDate: "Feb 2019",
    endDate: "Dec 2019",
    description: "Developed an interactive UI, enhancing user engagement by 40%."
  },
  {
    company: "Cheta's Foods",
    jobTitle: "Data Analyst",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730377198/Screenshot_2024-10-31_at_1.19.44_PM_dyj5ly.png",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description: "Led the integration of AI-driven analytics, boosting insights for client growth."
  },
  {
    company: "Creative Labs",
    jobTitle: "Project Manager",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730377455/Screenshot_2024-10-31_at_1.23.53_PM_b9lxka.png",
    startDate: "Aug 2016",
    endDate: "Apr 2018",
    description: "Streamlined workflow automation, reducing operational costs by 20%."
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <table>
        <tbody>
          {workData.map((item, index) => (
            <tr key={index} onClick={() => handleToggle(index)} className="work-row">
              <td>
                <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />
              </td>
              <td>
                <p>{item.startDate} - {item.endDate}</p>
                <h3>{item.company}</h3>
                <p className="job-title">{item.jobTitle}</p>
                {activeIndex === index && (
                  <p className="work-description">{item.description}</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Work;
