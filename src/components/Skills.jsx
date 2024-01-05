
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiInsomnia } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const icons = [
  <FaHtml5 size={90} className="fill-red-500 " key="html5" />,
  <FaCss3Alt size={90} className="fill-blue-500 " key="css3" />,
  <DiJavascript size={90} className="fill-yellow-500 " key="javascript" />,
  <FaReact size={90} className="fill-blue-400 " key="react" />,
  <SiMongodb size={90} className="fill-green-800 " key="mongodb" />,
  <FaNodeJs size={90} className="fill-green-600 " key="nodeJs" />,
  <SiInsomnia size={90} className="fill-purple-900 " key="insomnia" />,
  <BiLogoTailwindCss size={90} className="fill-blue-400 " key="tailwind-css" />,
  <FaBootstrap size={90} className="fill-purple-600 " key="bootstrap" />,
];

function Skills() {
  return (
    <div>
      <div className="mt-10 h-auto pb-32 pt-10 " id="skills">
        <h2 className=" text-center font-bold text-4xl mt-5 mb-5 ">
          Skills 
        </h2>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
          infinite={true}
          className="max-w-3xl mx-auto mt-10"
          autoPlay={true}
          autoPlaySpeed={4000} // Adjust the speed as needed
  
          customTransition="all 1s linear"
        
        
        >
          {icons.map((icon) => (
            <div
              key={icon.key}
              className=" border-l border-r p-10 mb-10 flex justify-center "
            >
              {icon}
            </div>
          ))}
        </Carousel>
       
      </div>
    </div>
  );
}

export default Skills;

{
  //icons in divs
  /* <div className="flex justify-center gap-5 flex-wrap ">
     <div>
     
        <FaHtml5 size={90} className="fill-red-500"/>
     </div>
      <div>
        <FaCss3Alt size={90} className="fill-blue-500" />
      </div>
      <div>
        <DiJavascript size={90} className="fill-yellow-500" />
      </div>
      <div>
        <FaReact size={90} className="fill-blue-400" />
      </div>
      <div>
        <SiMongodb size={90} className="fill-green-800"  />
      </div>
      <div>
      <FaNodeJs size={90} className="fill-green-600" />
      </div>
      <div><SiInsomnia size={90} className="fill-purple-900" /></div>
      <div>
        <BiLogoTailwindCss size={90} className="fill-blue-400"/>
      </div>
      <div>
        <FaBootstrap size={90} className="fill-purple-600" />
      </div>
      <div>

      </div>
   </div> */
}
