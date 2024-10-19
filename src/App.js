import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/Chatboat/ChatBot";
import { themeContext } from "./Context";
import Lottie from "lottie-react";
import loaderAnimation from "./animation/Animation - 1725397613161.json"; // Replace with your Lottie file path
import Proficiency from "./components/Proficiency/Proficiency";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#171C28" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {loading ? (
        <div className="loader-container">
          <Lottie
            animationData={loaderAnimation}
            loop={true}
            className="lottie-animation"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Proficiency />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
