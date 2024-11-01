import { skillsData } from "../assets/data/data";

export const Skills = () => {
  return (
    <>
      <section className="skills-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My Skills</h2>
            <p>
              Passionate about building responsive and user-friendly web
              applications using React.
            </p>
          </div>

          <div className="skills-widget grid6">
            {skillsData.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="number">{skill.percentage}%</div>
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
