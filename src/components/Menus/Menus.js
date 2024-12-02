import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcBookmark
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <a target="_blanck" href="https://media.licdn.com/dms/image/D4D03AQET1XYFmBGQ2g/profile-displayphoto-shrink_400_400/0/1707468550995?e=1714608000&v=beta&t=UvYAkCNIXeMidQsod3hTOxBlHncS5NVeYWq3Mg-HQe8" download="My_pic.jpg">
                <img src="https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-6/452932915_122099470106441078_458242949604470335_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zFFxR4n9FAAQ7kNvgFz4mn-&_nc_zt=23&_nc_ht=scontent.fpat1-2.fna&_nc_gid=ADoavNNuhjTEDDlOMWyLaFc&oh=00_AYChC_yRYcbGDD62ZkQJYX0PfBWKegyWF_AEmYEAbyg1_w&oe=67539501" alt="profile pic" />
              </a>
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                {/* Home start */}
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                {/* Home end */}

                {/* About start */}
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                {/* About end */}

                {/* Education start */}
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
                {/* Education end */}

                {/* Techstack start */}
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                {/* Techstack end */}

                {/* Course start */}
                <div className="nav-link">
                  <Link
                    to="course"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBookmark />
                    Course
                  </Link>
                </div>
                {/* Course end */}

                {/* Project start */}
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                {/* Project end */}

                {/* Experiance start */}
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                </div>
                {/* Experiance end */}

                {/* Contact start */}
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
                {/* Contact end */}

              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">

              {/* Home start  */}
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              {/* Home end  */}

              {/* About start */}
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              {/* About end */}

              {/* Education start */}
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
              </div>
              {/* Education end */}

              {/* Techstack start */}
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>
              {/* Techstack end */}

              {/* Course start */}
              <div className="nav-link">
                <Link
                  to="course"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBookmark />
                </Link>
              </div>
              {/* Course end */}

              {/* Project start */}
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              {/* Project end */}

              {/* Experiance start */}
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              {/* Experiance end */}

              {/* Contact start */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
              {/* Contact end */}

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
