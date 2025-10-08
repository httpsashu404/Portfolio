import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import Jump from "react-reveal/Jump";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <Jump>
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
              Work Experience
            </h2>
          </Jump>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            
            {/* Internship Studio start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Aug-Feb 2025"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />} 
            >
              <h3 className="vertical-timeline-element-title">
                Full Web development
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/sX4TwsD' target="__blank">Internship Studio (iStudio)</a></h5>
              <p className="text-secondary">Internship+Traning (Remote)</p>
            </VerticalTimelineElement>
            {/* Internship Studio end */}

            {/* Orinson techonology start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep-Oct 2024"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full stack development
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/kVYdxv0k' target="__blank">Orinson technologies pvt. ltd.</a></h5>
              <p className="text-secondary">Internship (Remote)</p>
            </VerticalTimelineElement>
            {/* Orinson technology end */}

            {/* TopperWorld start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May-Jun 2024"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/3xgLDL4' target="__blank">Intern with TopperWorld</a></h5>
              <p className="text-secondary">Internship (Remote)</p>
            </VerticalTimelineElement>
            {/* TopperWorld end */}

            {/* Codsoft start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Mar-Apr 2024"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/0Vr9V7QR' target="__blank">Intern with codSoft</a></h5>
              <p className="text-secondary">Internship (Remote)</p>
            </VerticalTimelineElement>
            {/* Codsoft end */}

            {/* BhartIntern start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb-Mar, 2024"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/4wgNnm0d' target="__blank">Intern with BhartIntern</a></h5>
              <p className="text-secondary">Internship (Remote)</p>
            </VerticalTimelineElement>
            {/* BhartIntern end */}


            {/* Lava start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep-Mar, 2021"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Mobile manufacturing
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/HDg099L4' target="__blank">LAVA International Ltd. (Noida)</a></h5>
              <p className="text-secondary">Trainee (Onsite)</p>
            </VerticalTimelineElement>
            {/* Lava end */}

            {/* PMKK start */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb-Apr, 2020"
              iconStyle={{ background: "#49688e", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Hardware & Networking
              </h3>
              <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/JWRwTRgH' target="__blank">Rohtas-PMKK, Sasaram</a></h5>
              <p className="text-secondary">Trainee (Onsite)</p>
            </VerticalTimelineElement>
            {/* PMKK end */}

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
