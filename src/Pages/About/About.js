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
                src="https://avatars.githubusercontent.com/u/159816902?s=400&u=5644805172b571935327185b6ad953937f973c14&v=4"
                alt="profile_pic"
              />
            </div>
          </Zoom>
          <Fade right>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Welcome to my portfolio! I'm Ashutosh Kumar from Bihar. I'm a dedicated MERN (MongoDB, Express.js, React.js, Node.js) developer with a passion for crafting efficient and user-friendly web applications. With a keen eye for detail and a commitment to excellence, I specialize in leveraging the power of the MERN stack to build dynamic and scalable solutions. Explore my projects to see how I combine creativity and technical expertise to deliver impactful digital experiences.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
