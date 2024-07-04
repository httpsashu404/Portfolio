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
        <div className="row" id="ads">
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ImageResizer</span>
                  <img
                    src="https://th.bing.com/th/id/R.96c1c163a158acbc300f1111e769a34b?rik=F4bMQNjoA2WtEg&riu=http%3a%2f%2fabout.canva.com%2fwp-content%2fuploads%2fsites%2f3%2f2017%2f08%2ffb_magic-resize.png&ehk=%2bcypQtBbTf2zKhhH9kNKLMPmjtiHvMSRBXykp1Faf3M%3d&risl=&pid=ImgRaw&r=0"
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
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">WordCounter</span>
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
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Expenses</span>
                  <img
                    src="https://i.ytimg.com/vi/w18iNp5NsKQ/maxresdefault.jpg"
                    alt="project1"
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
          </Zoom>
        </div>
        <a className="view" target="_blanck" href="https://github.com/httpsashu404?tab=repositories">VIEW MORE....</a>
      </div>
    </>
  );
};

export default Projects;
