
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function BackgroundEducation() {

  return (
    <div className="" id="backgroundEducation">
      
      <h2 className="mt-20 pt-20 md:text-4xl text-2xl text-center font-bold pb-20 md:pb-28 ">Educational Background</h2>
      <VerticalTimeline>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date=" Dec 2022 - Feb 2024"
          dateClassName="bg-transparent"
          iconStyle={{ background: "#F87171", color: "#ffff" }}
          icon={<IoMdSchool fontSize={'60px'} className="bg-red-400 fill-white text-lg" />} 
        > {/* can not change the size of the icon!! */}
          <div className="shadow-xl bg-zinc-100 hover:shadow-lg ">
            <h3 className="vertical-timeline-element-title p-2 bg-zinc-100 font-bold ">
              Full-Stack Web and Software Development Course
            </h3>
            <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100 border-b-2">Online Course</h4>
       
              <ul className="bg-zinc-100 p-2 ">
                Front-end Development:
                <li className="bg-zinc-100">HTML/CSS</li>
                <li className="bg-zinc-100">JavaScript</li>
                <li className="bg-zinc-100">React js</li>
              </ul>
              <ul className="bg-zinc-100 p-2">
                Back-end Development:
                <li className="bg-zinc-100">Node.js</li>
                <li className="bg-zinc-100">Express.js</li>
                <li className="bg-zinc-100">MongoDB</li>
              </ul>
        
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="Oct 2022 - Nov 2022"
          dateClassName="bg-transparent"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className="bg-red-400 fill-white" />} 
        >
          <div className="shadow-xl bg-zinc-100 hover:shadow-lg">
            <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
              Orientation Course for Digital Jobs
            </h3>
            <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100 border-b-2">Online Course</h4>

              <ul className="p-2 bg-zinc-100 ">
                <li className="bg-zinc-100">
                  Introduction to Web-Development and HTML First steps in CSS
                </li>
                <li className="bg-zinc-100">Online Marketing</li>
                <li className="bg-zinc-100">Introduction to Cloud Computing</li>
                <li className="bg-zinc-100">Introduction to Amazon Web Service</li>
                <li className="bg-zinc-100">Occupational Knowledge Digital Professions within Germany</li>
              </ul>
    
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2014 - Sep 2017"
          dateClassName="bg-transparent"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white" />} 
        >
          <div className="shadow-xl bg-zinc-100 hover:shadow-lg">
            <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
              Master of Artificial Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100 border-b-2">Master Degree</h4>

              <ul className="bg-zinc-100  p-2">
                <li className="bg-zinc-100">
                  Extensive coursework in Neural Networks, Image Processing, Fuzzy
                  Logic, Machine Learning, and Advanced AI.
                </li>
                <li className="bg-zinc-100">
                  Theses: Agent Based Framework in Semantic Web Content Mining.
                </li>
              </ul>
          
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2009 - Sep 2014"
          dateClassName="bg-transparent"
          iconStyle={{ background: "#F87171", color: "#fff" }}
          icon={<IoMdSchool className=" bg-red-400 fill-white " style={{ fontSize: '3rem' }} /> } 
        >
          <div className="shadow-xl bg-zinc-100 hover:shadow-lg">
            <h3 className="vertical-timeline-element-title font-bold p-2 bg-zinc-100">
              Bachelor of Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle p-2 bg-zinc-100 border-b-2">
              Bachelor Degree
            </h4>
        
              <ul className="bg-zinc-100  p-2" >
                <li className="bg-zinc-100 "  >4-year software engineering program completion</li>
                <li className="bg-zinc-100">Expertise in operating systems and database design</li>
              </ul>
          
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
       
        />
      </VerticalTimeline>
    </div>
  );
}

export default BackgroundEducation;
