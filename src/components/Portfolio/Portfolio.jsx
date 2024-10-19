// import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Sidebar from "../../img/sidebar.jpg";
// import Ecommerce from "../../img/ecommerce.jpg";
// import HOC from "../../img/hoc.jpg";
// import MusicApp from "../../img/musicapp.jpg";
// import { themeContext } from "../../Context";
// import Thumbnail from "../../img/thumbnail.jpg";
// import Perfume from "../../img/perfume.jpg";
// import Car from "../../img/car.jpg";
// import Watch from "../../img/watch.jpg";
// import Shoes from "../../img/shoes.jpg";
// import AOS from "aos";
// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide>
//           <img src={Sidebar} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useState, useContext } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "./Portfolio.css";







// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (imageSrc) => {
//     setSelectedImage(imageSrc);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedImage(null);
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100 });
//   }, []);

//   return (
//     <div className="portfolio" data-aos="fade-up-right" id="portfolio">
//       {/* heading */}
//       <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide onClick={() => openModal(Sidebar)}>
//           <img src={Sidebar} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Ecommerce)}>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(MusicApp)}>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(HOC)}>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Thumbnail)}>
//           <img src={Thumbnail} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Perfume)}>
//           <img src={Perfume} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Car)}>
//           <img src={Car} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Watch)}>
//           <img src={Watch} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Shoes)}>
//           <img src={Shoes} alt="" />
//         </SwiperSlide>
//         <SwiperSlide onClick={() => openModal(Perfume)}>
//           <img src={Perfume} alt="" />
//         </SwiperSlide>
//       </Swiper>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <img src={selectedImage} alt="Selected Project" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;







import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import Todo from "../../img/todo.PNG";
import Weather from "../../img/weather.PNG";
import Movie from "../../img/movie.PNG";
import AOS from "aos";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const [activeTab, setActiveTab] = useState("React");
  const [isFading, setIsFading] = useState(false); // State for triggering the fade transition

  const reactProjects = [
    {
      img: Weather,
      title: "Weather App",
      liveLink: "https://loquacious-tartufo-0c948a.netlify.app/",
      codeLink: "https://github.com/Arham4209/Weather-app",
    },
    {
      img: Todo,
      title: "ToDo List",
      liveLink: "https://marvelous-salmiakki-39b501.netlify.app/",
      codeLink: "https://github.com/Arham4209/movie-searching-app",
    },
    {
      img: Movie,
      title: "Movie Searching App",
      liveLink: "https://lovely-taiyaki-2f0f64.netlify.app/",
      codeLink: "https://github.com/Arham4209/shopping-list",
    },
  
  ];

  const wordpressProjects = [
    {
      img: Weather,
      title: "E-Commerce Store",
      liveLink: "#",
      codeLink: "#",
    },
    
  ];

  const projects = activeTab === "React" ? reactProjects : wordpressProjects;

  // Function to handle tab switching with smooth transition
  const handleTabSwitch = (tab) => {
    setIsFading(true); // Trigger fade-out effect
    setTimeout(() => {
      setActiveTab(tab); // Change tab after fade-out
      setIsFading(false); // Trigger fade-in after content has changed
    }, 300); // Match timeout with the CSS transition duration
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Tabs */}
      <div className="portfolio-tabs">
        <button
          className={activeTab === "React" ? "active" : ""}
          onClick={() => handleTabSwitch("React")}
        >
          React
        </button>
        <button
          className={activeTab === "WordPress" ? "active" : ""}
          onClick={() => handleTabSwitch("WordPress")}
        >
          WordPress
        </button>
      </div>

      {/* Project Cards */}
      <div className={`portfolio-grid ${isFading ? "fade" : "fade-in"}`}>
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index} data-aos="fade-up">
            <img src={project.img} alt={project.title} className="portfolio-img" />
            <div className="portfolio-details">
              <h3>{project.title}</h3>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

