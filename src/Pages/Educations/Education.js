import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shershah college, Sasaram
            </h4><p className="text-secondary">Computer Application</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2018"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Itermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">
              I.D.B.P.S. College, Nokha
            </h4><p className="text-secondary">Science (maths)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Utkarmit M S, Hathini
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
