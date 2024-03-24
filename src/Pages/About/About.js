import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQET1XYFmBGQ2g/profile-displayphoto-shrink_400_400/0/1707468550995?e=1714608000&v=beta&t=UvYAkCNIXeMidQsod3hTOxBlHncS5NVeYWq3Mg-HQe8"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Welcome to my portfolio! I'm Ashutosh Kumar, a dedicated MERN MongoDB, Express.js, React.js, Node.js
                developer with a passion for crafting efficient and user-friendly web applications.
                With a keen eye for detail and a commitment to excellence,
                I specialize in leveraging the power of the MERN stack to build dynamic and scalable solutions.
                Explore my projects to see how I combine creativity and technical expertise to deliver impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
