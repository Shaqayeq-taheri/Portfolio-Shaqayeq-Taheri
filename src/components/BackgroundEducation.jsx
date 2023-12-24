
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function BackgroundEducation() {
  return (
    <div className=" pb-20">
      <h2 className="text-4xl text-center font-bold pb-20 pt-20 ">Education Background</h2>
      <VerticalTimeline>
        {/*    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2024 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />} 
        >
          <h3 className="vertical-timeline-element-title">Learn New Technologies</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> 
         */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Dec 2022 - Feb 2024"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool fontSize={'60px'} className="bg-red-400 fill-white text-lg" />} 
        > {/* can not change the size of the icon!! */}
          <h3 className="vertical-timeline-element-title p-1">
            Full-Stack Web Development Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-1">Online Course</h4>
          <p className="p-1">
            <ul>
              Front-end Development:
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React js</li>
            </ul>
            <ul>
              Back-end Development:
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Oct 2022 - Nov 2022"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className="bg-red-400 fill-white" />} 
        >
          <h3 className="vertical-timeline-element-title font-bold p-1">
            Orientation Course for Digital Jobs
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-1">Online Course</h4>

          <p className="p-1">
            <ul className="">
              <li>
                Introduction to Web-Development and HTML First steps in CSS
              </li>
              <li>Online Marketing</li>
              <li>Introduction to Cloud Computing</li>
              <li>Introduction to Amazon Web Service</li>
              <li>Occupational Knowledge Digital Professions within Germany</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2014 - Sep 2017"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white" />} 
        >
          <h3 className="vertical-timeline-element-title font-bold p-1">
            Master of Artificial Intelligence
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-1">Master Degree</h4>
          <p className="p-1">
            <ul>
              <li>
                Extensive coursework in Neural Networks, Image Processing, Fuzzy
                Logic, Machine Learning, and Advanced AI.
              </li>
              <li>
                Theses: Agent Based Framework in Semantic Web Content Mining.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2009 - Sep 2014"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white" style={{ fontSize: '3rem' }} /> } 
        >
          <h3 className="vertical-timeline-element-title font-bold p-1">
            Bachelor of Computer Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-1">
            Bachelor Degree
          </h4>
          <p className="p-1">
            <ul>
              <li>4-year software engineering program completion</li>
              <li>Expertise in operating systems and database design</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
       
        />
      </VerticalTimeline>
    </div>
  );
}

export default BackgroundEducation;
