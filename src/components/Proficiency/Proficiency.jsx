import React, { useContext, useEffect } from "react";
import { themeContext } from "../../Context";
import ProgressBar from "./ProgressBar"; // Import your ProgressBar component
import "./Proficiency.css";
import AOS from "aos";

const skills = [
  { name: "Html", percentage: 90 },
  { name: "Css", percentage: 80 },
  { name: "JavaScript", percentage: 70},
  { name: "React", percentage: 65 },
  { name: "Wordpress", percentage: 75 },

];

const Proficiency = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <div className="experience" id="experience" data-aos="fade-right">
      <span
        className="pro"
        style={{ color: darkMode ? "white" : "var(--black)" }}
      >
        Proficiency
      </span>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span style={{ color: darkMode ? "white" : "var(--black)" }}>
              {skill.name}
            </span>
            <ProgressBar percentage={skill.percentage} color={skill.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proficiency;
