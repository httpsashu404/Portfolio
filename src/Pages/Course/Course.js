import React from "react";
import Jump from "react-reveal/Jump";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Course.css";
const Course = () => {
    return (
        <>
            <div className=" course" id="course">
                <Jump>
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Course Details
                    </h2>
                </Jump>
                <hr />
                <VerticalTimeline>

                    {/* SSC Prepration start */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="Jul, 2025 - till"
                        iconStyle={{ background: "#49688e", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">SSC Prepration (Myself)</h3>
                        <h5><a className="vertical-timeline-element-subtitle" href='https://www.youtube.com/@rankersgurukullive' target="__blank">Rankers Gurukul (YouTube)</a></h5>
                        <p className="text-secondary">SSC, Banking, Railway, etc. </p>
                    </VerticalTimelineElement>
                    {/* SSC Prepration end */}

                    {/* Intership Studio start */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="Aug - Feb, 2025"
                        iconStyle={{ background: "#49688e", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Web Development</h3>
                        <h5><a className="vertical-timeline-element-subtitle" href='https://internshipstudio.com/' target="__blank">Intership Studio (Online)</a></h5>
                        <p className="text-secondary">DSA, Frontend with React & Redux, Backend with Node & Express, Live Projects, Internship</p>
                    </VerticalTimelineElement>
                    {/* Intership Studio end */}

                    {/* Apna college start */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="Mar-Aug, 2024"
                        iconStyle={{ background: "#49688e", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">MERN Stack Developer</h3>
                        <h5><a className="vertical-timeline-element-subtitle" href='https://www.apnacollege.in/' target="__blank">Apna College (Online)</a></h5>
                        <p className="text-secondary">HTML, CSS, Bootstrap, Tailwind CSS, JS, ReactJS, Git & GitHub, NodeJS, ExpressJS, APIs, MySQL, MongoDB, </p>
                    </VerticalTimelineElement>
                    {/* Apna college end */}

                    {/* Physics wala start */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="Feb-Mar, 2024"
                        iconStyle={{ background: "#49688e", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Backend Developer</h3>
                        <h5><a className="vertical-timeline-element-subtitle" href='https://pwskills.com/' target="__blank">Physics Wala (Online)</a></h5>
                        <p className="text-secondary">Javascript, NodeJS, ExpressJS, MongoDB, APIs</p>
                    </VerticalTimelineElement>
                    {/* Physics wala end */}

                    {/* Rohtas PMKK start */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="Feb-Apr, 2020"
                        iconStyle={{ background: "#49688e", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">FTCP</h3>
                        <h5><a className="vertical-timeline-element-subtitle" href='https://nsdcindia.org/pmkk'>Rohtas-PMKK, Sasaram</a></h5>
                        <p className="text-secondary">Computer basic, Hardware, Networing, Troubleshooting, OS intallation & Formatting</p>
                    </VerticalTimelineElement>
                    {/* Rohtas PMKK end */}

                </VerticalTimeline>
            </div>
        </>
    );
};

export default Course;
