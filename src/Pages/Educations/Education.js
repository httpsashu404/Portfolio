import React from "react";
import Jump from "react-reveal/Jump";
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
        <Jump>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
        </Jump>
        <hr />
        <VerticalTimeline>

          {/* GCT start */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sep-Oct, 2023"
            iconStyle={{ background: "#49688e", color: "#fff" }} 
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/p6MsVGbT' target="__blank">GCT, Namakkal (Tamilnadu)</a></h5>
            <p className="text-secondary">I left it reason teaching language problem</p>
          </VerticalTimelineElement>
          {/* GCT end */}

          {/* NIT start */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sep-Jun, 2023"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">NIMCET Prepration (MCA)</h3>
            <h5><a className="vertical-timeline-element-subtitle" href='https://ibb.co/pvQbZt4Y' target="__blank">NIT Kurukshetra (Alloted me)</a></h5>
            <p className="text-secondary">I cancelled admission reason financial problem</p>
          </VerticalTimelineElement>
          {/* NIT end */}

          {/* BCA start */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h5><a className="vertical-timeline-element-subtitle" href='https://shershahcollege.co.in/' target="__blank">Shershah college, Sasaram</a></h5>
            <p className="text-secondary">Passed with 71%<br />Passed in Sep. 2022 (Session late + COVID-19)</p>
          </VerticalTimelineElement>
          {/* BCA end */}

          {/* Intermediate start */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2018"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Itermediate</h3>
            <h5><a className="vertical-timeline-element-subtitle" href='https://idbpscollege.in/' target="__blank">I.D.B.P.S college, Garhnokha</a></h5>
            <p className="text-secondary">Science (maths) with 46%</p>
          </VerticalTimelineElement>
          {/* Intermediate end  */}

          {/* Matric start */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016"
            iconStyle={{ background: "#49688e", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation</h3>
            <h5><a className="vertical-timeline-element-subtitle" href=' '>Utkramit M.S, Hathini</a></h5>
            <p className="text-secondary">Passed with 60%</p>
          </VerticalTimelineElement>
          {/* Matric end */}

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
