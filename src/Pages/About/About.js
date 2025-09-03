import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row justify-content-between align-items-center">
          <Zoom>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://avatars.githubusercontent.com/u/159816902?v=4https://avatars.githubusercontent.com/u/159816902?v=4https://avatars.githubusercontent.com/u/159816902?v=4"
                alt="profile_pic"
              />
            </div>
          </Zoom>
          <Fade right>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Welcome to my portfolio! I'm Ashutosh Kumar from Bihar. As a passionate MERN Developer, I specialize in building dynamic and scalable web applications. With a strong foundation in front-end and back-end development, I am adept at creating intuitive user interfaces and ensuring seamless server-side functionality. I enjoy solving complex problems and am constantly updating my skills to stay current with the latest technologies. My goal is to deliver efficient, high-quality website and impactful digital experiences that meet users’ needs.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
