import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { SlCallEnd } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Fade from "react-reveal/Fade";

// You will be self create file and put your resume with same name
import Resume from "../../assets/docs/resume.pdf";


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  // correct password
  const handleDownload = () => {
    // Prompt the user for the password

    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the link from the body

  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                    "React developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a title="Call" className="btn btn-primary btn-outline-light" target="_blanck" href="tel:7763992074">
                <SlCallEnd />
              </a>
              <a title="Hire me"
                className=" btn btn-success btn-outline-light mx-2"
                target="_blanck" href="https://api.whatsapp.com/send?phone=7763992074"
                rel="noreferrer"
              >
                <SiWhatsapp />
              </a>
              <button title="Resume" className="btn btn-dark btn-outline-light" onClick={handleDownload}>
                Resume <FaDownload/>
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
