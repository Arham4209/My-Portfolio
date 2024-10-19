


// import React, { useContext } from "react";
// import "./Toggle.css";
// import Moon from "@iconscout/react-unicons/icons/uil-moon";
// import Sun from "@iconscout/react-unicons/icons/uil-sun";
// import { themeContext } from "../../Context";

// const Toggle = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   const handleClick = () => {
//     theme.dispatch({ type: "toggle" });
//   };

//   return (
//     <div className="toggle" onClick={handleClick}>
//       <Moon style={{ opacity: darkMode ? 1 : 0 }} />
//       <Sun style={{ opacity: darkMode ? 0 : 1 }} />
//       <div
//         className="t-button"
//         style={{ transform: darkMode ? 'translateX(20px)' : 'translateX(0)' }}
//       ></div>
//     </div>
//   );
// };

// export default Toggle;



import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className={`toggle ${darkMode ? 'dark-mode' : ''}`} onClick={handleClick}>
      <Moon style={{ opacity: darkMode ? 1 : 0 }} />
      <Sun style={{ opacity: darkMode ? 0 : 1 }} />
      <div
        className="t-button"
        style={{ transform: darkMode ? 'translateX(20px)' : 'translateX(0)' }}
      ></div>
    </div>
  );
};

export default Toggle;
