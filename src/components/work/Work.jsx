import { useState } from 'react';
import './Work.css';

const workData = [
  {
    company: "Liben",
    jobTitle: "Lead Frontend Developer",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368832/Screenshot_2024-10-31_at_10.56.36_AM_fp9zt3.png",
    startDate: "Jan 2024",
    endDate: "Ongoing",
    description: "Leading frontend development for a platform connecting local and high-skill workers with clients, similar to Upwork."
  },
  {
    company: "HomeAcq",
    jobTitle: "Frontend Developer",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730368840/Screenshot_2024-10-31_at_9.16.43_AM_sapnct.png",
    startDate: "Feb 2019",
    endDate: "Dec 2019",
    description: "Built an interactive property listing interface using Google Maps API for property-specific locations and geolocation to calculate distances between users and agents."
  },
  {
    company: "Cheta's Foods",
    jobTitle: "Fullstack Developer",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730377198/Screenshot_2024-10-31_at_1.19.44_PM_dyj5ly.png",
    startDate: "May 2024",
    endDate: "Ongoing",
    description: "Developing a food delivery website similar to Chowdeck, focusing on seamless user experience, responsive design, and optimized backend."
  },
  {
    company: "ObiNwanne Social Bar",
    jobTitle: "Restaurant Manager",
    logo: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730377455/Screenshot_2024-10-31_at_1.23.53_PM_b9lxka.png",
    startDate: "Aug 2016",
    endDate: "Apr 2018",
    description: "Managed daily restaurant operations, overseeing staff, customer service, and inventory, while improving operational efficiency."
  }
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
