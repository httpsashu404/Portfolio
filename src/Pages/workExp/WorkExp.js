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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/97839a40-95b7-4ab4-97fa-6fe35c19ec2a' target="__blank">Internship Studio (iStudio)</a></h5>
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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/f7555b82-1872-4a5c-869b-c81e45d9fd04' target="__blank">Orinson technologies pvt. ltd.</a></h5>
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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/538e8523-d938-43a9-b8ce-4df2dcc08e42' target="__blank">Intern with TopperWorld</a></h5>
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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/2818ec78-21f5-4005-9acb-31cc24cf1f62' target="__blank">Intern with codSoft</a></h5>
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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/7acb8131-ecbc-486e-86a2-c7379f4f334d' target="__blank">Intern with BhartIntern</a></h5>
              <p className="text-secondary">Internship (Remote)</p>
            </VerticalTimelineElement>
            {/* BhartIntern end */}

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
              <h5><a className="vertical-timeline-element-subtitle" href='https://github.com/user-attachments/assets/830c3eba-9e4e-41a9-8304-2e1025923d4b' target="__blank">Rohtas-PMKK, Sasaram</a></h5>
              <p className="text-secondary">Traning (Onsite)</p>
            </VerticalTimelineElement>
            {/* PMKK end */}

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
