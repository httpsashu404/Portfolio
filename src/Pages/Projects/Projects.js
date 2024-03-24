import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {/* Here types about your project */}
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Registration</span>
                  <img
                    src="https://i.ytimg.com/vi/ot_tXO4xqo4/maxresdefault.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Registration form
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blanck" href="https://github.com/httpsashu404/Registration.git" >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Weather</span>
                  <img
                    src="https://i.ytimg.com/vi/ZC2aJJBi51s/maxresdefault.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JS</span>
                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Weather forcaste</h6>
                  </div>
                  <a
                    className="ad-btn"
                    target="_blanck" href="https://github.com/httpsashu404/Weather-forcaste.git" >
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
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Expenses tracker</h5>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://github.com/httpsashu404/Money-Tracker.git">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
        <a className="view" target="_blanck" href="https://github.com/httpsashu404?tab=repositories">VIEW MORE....</a>
      </div>
    </>
  );
};

export default Projects;
