import React from "react";
import "./Projects.css";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <Jump>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            TOP RECENT PROJECTS
          </h2>
        </Jump>
        <hr />
        <p className="pb-3 text-center">
          {/* Here types about your project */}
        </p>
        {/* card design */}
        <div className="row justify-content-center" id="ads">
          <Zoom>
            {/* E-commerce start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img src="https://francetravelpages.com/wp-content/uploads/2023/09/Understanding-Soldes-2024-768x432.jpg" alt="project7" />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">E-commerce</h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://zenmartbyashu.netlify.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* E-commerce End */}

            {/* calculator start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img src="https://i.ytimg.com/vi/oFxanU9QlbI/maxresdefault.jpg" alt="project6" />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Calculator</h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://calcwithashu.netlify.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* calculator end */}

            {/* weather forcaste start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img src="https://cdn.browsercam.com/headers/com.weather.forecaster.updates-header.png" alt="project5" /><br />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Weather forcast</h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://httpsashu404.github.io/Weather-forcaste/">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* weather forcaste end */}

            {/* AR-infotech start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img src="https://www.secomapp.com/wp-content/uploads/2023/10/landing-page.png" alt="project4" />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">AR INFOTECH</h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://httpsashu404.github.io/LandingPage/">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* AR-infotech end */}

            {/* expenses tracker start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://i.ytimg.com/vi/w18iNp5NsKQ/maxresdefault.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Expenses tracker</h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://moneytrackerwithashu.netlify.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* expenses tracker end */}

            {/* word counter start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://www.writinganalytics.co/assets/images/word-counter-site-card.png"
                    alt="project2"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Word Counter</h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blanck" href="https://wordcounterwithashu.netlify.app/" >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* word counter end */}

            {/* image resizer start */}
            <div className="col-md-4 mb-3">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://clipartcraft.com/images/canva-logo-animated.png"
                    alt="project1"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Image Resizer
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blanck" href="https://imgresizewithashu.netlify.app/" >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* image resizer end */}
          </Zoom>
        </div>
        <a className="view" target="_blanck" href="https://github.com/httpsashu404?tab=repositories">VIEW MORE....</a>
      </div>
    </>
  );
};

export default Projects;
