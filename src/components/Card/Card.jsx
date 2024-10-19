// import React from "react";
// import "./Card.css";

// const Card = ({emoji, heading, detail, color}) => {
//   return (
//     <div className="card" style={{borderColor: {color}}}>
//       <img src={emoji} alt="" />
//       <span>{heading}</span>
//       <span>{detail}</span>
//       <button className="c-button">LEARN MORE</button>
//     </div>
//   );
// };

// export default Card;

// import React, { useEffect } from "react";
// import "./Card.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Card = ({ emoji, heading, detail, color }) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100 });
//   }, []);

//   return (
//     <div className="card" style={{ borderColor: color }} >
//       <img src={emoji} alt="" />
//       <span>{heading}</span>
//       <span>{detail}</span>
//       <button className="c-button">LEARN MORE</button>
//     </div>
//   );
// };

// export default Card;

import React, { useEffect } from "react";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ emoji, heading, detail, color }) => {
  useEffect(() => {
    // Check if the screen width is 480px or less
    if (window.innerWidth <= 480) {
      AOS.init({ duration: 1300, offset: 100 });
    }
  }, []);

  return (
    <div
      className="card"
      style={{ borderColor: color }}
      data-aos={window.innerWidth <= 480 ? "fade-up-right" : ""}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
