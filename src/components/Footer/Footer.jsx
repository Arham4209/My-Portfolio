import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import Phone from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    // <div className="footer">
    //   <img src={Wave} alt="" style={{ width: "100%" }} />
    //   <div className="f-content">
    //     <span>All Right Reservrd ©| 2024| Saqib Akhter</span>
    //     <div className="f-icons">
    //       <Insta color="white" size={"3rem"} />
    //       <Facebook color="white" size={"3rem"} />
    //       <Gitub color="white" size={"3rem"} />
    //     </div>
    //   </div>
    // </div>

    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      
        <div className="f-icons">
          <a
            href="https://www.instagram.com/saqib.creator?igsh=M2Y2a242N2x0OXN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>

          <a
            href="https://www.linkedin.com/in/md-saqib-akhter-6b4b56287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://wa.me/923340364209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone color="white" size={"3rem"} />
          </a>
        </div>
        <span>Develop by Saad ©| 2024| Saad Ikram</span>
      </div>
    </div>
  );
};

export default Footer;
