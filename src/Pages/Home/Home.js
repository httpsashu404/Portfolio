import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { SlCallEnd } from "react-icons/sl";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Fade from "react-reveal/Fade";


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  // correct password
  const correctPassword = ' '
  const handleDownload = () => {
    // Prompt the user for the password
    const password = prompt('Please enter the password to download the resume :');

    if (password === correctPassword) {
      const link = document.createElement('a');
      link.href = Resume;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove the link from the body
    } else {
      // Show an alert if the password is incorrect
      alert('Incorrect password');
    }
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
              <a title="call me" className="btn btn-call" target="_blanck" href="tel:7763992074">
                <SlCallEnd />
              </a>
              <a title="hire me"
                className="btn btn-hire"
                target="_blanck" href="https://api.whatsapp.com/send?phone=7763992074"
                rel="noreferrer"
              >
                Hire Me
              </a>
              <button className="btn btn-cv" onClick={handleDownload}>
                Resume
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
