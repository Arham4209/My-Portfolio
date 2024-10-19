import React, { useContext, useEffect } from "react";
import "./Experience.css";
import Html from "../../img/HTML.png";
import Css from "../../img/CSS.png";
import Js from "../../img/JS.png";
import ReactJs from "../../img/React.png";
import Wp from "../../img/WP.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AOS from "aos";

const Experience = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left" data-aos="fade-right">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
      Experience
          </span>
          <span>Tools & Language</span>
          <spane>
          I have expertise in HTML, CSS, JavaScript, React.js, and WordPress, <br /> enabling me to build dynamic web interfaces and <br/> manage content effectively.
        
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right" data-aos="fade-left">
        <motion.div
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 10, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={ReactJs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Wp} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Experience;
