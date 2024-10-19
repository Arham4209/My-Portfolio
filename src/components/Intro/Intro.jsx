import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy2.png"
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 3, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }} >Hi!I Am<span className="wave-emoji">👋</span></span>
          <span>Saad Ikram</span>
          <span>
          I'm a Frontend Developer with 6 months of experience in React.js and a solid background in WordPress development. I specialize in creating responsive, user-friendly web applications and websites. My focus is on delivering high-quality, efficient, and visually appealing digital solutions.


          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://www.github.com/Arham4209"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Github} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-saad-ikram-6b4b56287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/saqib.creator?igsh=M2Y2a242N2x0OXN6"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={boy} alt="" className="boy"/>
        {/* animation */}
        <motion.img
          initial={{ left: "-26%" }}
          whileInView={{ left: "-10%" , top: "-20%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
          
        />

        <motion.div
          initial={{ top: "-10%", left: "74%" }}
          whileInView={{  left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Graphic" text2="Designer" className="floatingdiv"  />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Ever" className="floatingdiv" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;










