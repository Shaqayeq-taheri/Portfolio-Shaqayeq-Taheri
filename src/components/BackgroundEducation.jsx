
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function BackgroundEducation() {
  return (
    <div className=" mt-28">
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
          <h3 className="vertical-timeline-element-title p-2 bg-zinc-100 font-bold">
            Full-Stack Web Development Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100">Online Course</h4>
          <p className="p-2">
            <ul className="bg-zinc-100 ">
              Front-end Development:
              <li className="bg-zinc-100">HTML/CSS</li>
              <li className="bg-zinc-100">JavaScript</li>
              <li className="bg-zinc-100">React js</li>
            </ul>
            <ul className="bg-zinc-100 ">
              Back-end Development:
              <li className="bg-zinc-100">Node.js</li>
              <li className="bg-zinc-100">Express.js</li>
              <li className="bg-zinc-100">MongoDB</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="Oct 2022 - Nov 2022"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className="bg-red-400 fill-white" />} 
        >
          <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
            Orientation Course for Digital Jobs
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100">Online Course</h4>

          <p className="p-2 bg-zinc-100">
            <ul className="">
              <li className="bg-zinc-100">
                Introduction to Web-Development and HTML First steps in CSS
              </li>
              <li className="bg-zinc-100">Online Marketing</li>
              <li className="bg-zinc-100">Introduction to Cloud Computing</li>
              <li className="bg-zinc-100">Introduction to Amazon Web Service</li>
              <li className="bg-zinc-100">Occupational Knowledge Digital Professions within Germany</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2014 - Sep 2017"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white" />} 
        >
          <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
            Master of Artificial Intelligence
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100">Master Degree</h4>
          <p className="p-2 bg-zinc-100">
            <ul>
              <li className="bg-zinc-100">
                Extensive coursework in Neural Networks, Image Processing, Fuzzy
                Logic, Machine Learning, and Advanced AI.
              </li>
              <li className="bg-zinc-100">
                Theses: Agent Based Framework in Semantic Web Content Mining.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2009 - Sep 2014"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white " style={{ fontSize: '3rem' }} /> } 
        >
          <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
            Bachelor of Computer Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100">
            Bachelor Degree
          </h4>
          <p className="p-2 bg-zinc-100">
            <ul >
              <li  >4-year software engineering program completion</li>
              <li className="bg-zinc-100">Expertise in operating systems and database design</li>
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
