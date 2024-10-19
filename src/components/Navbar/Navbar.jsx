// import React from "react";
// import Toggle from "../Toggle/Toggle";
// import  "./Navbar.css";
// import { Link } from "react-scroll";
// const Navbar = () => {

// const myName=  [
//     {
//         "name": "<Saad Ikram />"
//     }
// ]

//   return (
//     <div className="n-wrapper" id="Navbar">
//       {/* left */}
//       <div className="n-left">

// {myName.map((name, id) => (
//         <div className="n-name" key={id}>
//         {name.name}
//         </div>
//       ))}
//         {/* <div className="n-name">Saad Ikram</div> */}
//         <Toggle />
//       </div>
//       {/* right */}
//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyleType: "none" }}>

//             <li>
//               <Link to="services" spy={true} smooth={true}>
//                 Serivces
//               </Link>
//             </li>
//             <li>
//               <Link to="works" spy={true} smooth={true}>
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link to="portfolio" spy={true} smooth={true}>
//                 Protfolio
//               </Link>
//             </li>
//             <li>
//               <Link to="testimonial" spy={true} smooth={true}>
//                 Reviews
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Link to="contact" spy={true} smooth={true}>
//           <button className="button n-button">Contact</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const myName = [
    {
      name: "<Saad Ikram />",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        {myName.map((name, id) => (
          <div className="n-name" key={id}>
            {name.name}
          </div>
        ))}
      </div>
      {/* right */}
      <div className="n-right">
        <div className={`n-list ${menuOpen ? "open" : ""}`}>
          <ul style={{ listStyleType: "none" }}>

          <li>
              <Link to="home" spy={true} smooth={true}>
            Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            
            {/* Dark mode toggle inside menu */}
            <li>
              <Toggle />
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        {/* Hamburger Icon */}
        <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
