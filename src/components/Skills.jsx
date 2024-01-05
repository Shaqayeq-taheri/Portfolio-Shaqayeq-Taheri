
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaSass
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiInsomnia,SiExpress } from "react-icons/si";
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
  { icon: <FaHtml5 size={90} className="fill-red-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt size={90} className="fill-blue-500" />, name: 'CSS3' },
  { icon: <BiLogoTailwindCss size={90} className="fill-blue-400" />, name: 'Tailwind CSS' },
  { icon: <FaBootstrap size={90} className="fill-purple-600" />, name: 'Bootstrap' },
  {icon:<FaSass size={90} className=" fill-pink-400" /> ,name:'Sass'},
  { icon: <DiJavascript size={90} className="fill-yellow-500" />, name: 'JavaScript' },
  { icon: <FaReact size={90} className="fill-blue-400" />, name: 'React' },
  { icon: <SiMongodb size={90} className="fill-green-800" />, name: 'MongoDB' },
  { icon: <FaNodeJs size={90} className="fill-green-600" />, name: 'Node.js' },
  {icon:  <SiExpress  size={90}  />, name:'Express js'},
  { icon: <SiInsomnia size={90} className="fill-purple-900" />, name: 'Insomnia' },
 
 
  {icon:<FaGitAlt size={90} />, name:'Git'},
  {icon:<FaLinux size={90} /> ,name: 'Linux'}


];

function Skills() {
  return (
    <div>
      <div className="mt-10 h-auto pb-32 md:pt-10 " id="skills">
        <h2 className=" text-center font-bold md:text-4xl text-2xl mt-5 mb-5 md:pb-10 pb-0">
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
          swipeable={true}
          customTransition="all 1s ease-out"
        
        
        >
          {icons.map(({icon,name},index) => (
            <div
              key={index}
              className=" md:border-l md:border-r p-10 mb-10 flex justify-center "
            >
               <div>
                {icon}
                <p className="text-center pt-3">{name}</p>
              </div>
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
