import { Link as ScrollLink } from 'react-scroll';
import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaToolbox,
  FaEnvelope,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useState,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);


  const links = [
    {
      id: 1,
      link: "About Me",
      path: "#aboutme",
      icon: <FaUser className='bg-zinc-200' />,
    },
    {
      id: 2,
      link: "Educational Background",
      path: "#backgroundEducation",
      icon: <FaGraduationCap className='bg-zinc-200' />,
    },

    {
      id: 3,
      link: "Projects",
      path: "#projects",
      icon: <FaLaptopCode className='bg-zinc-200' />,
    },
    {
      id: 4,
      link: "Skills",
      path: "#skills",
      icon: <FaToolbox className='bg-zinc-200' />,
    },
    {
      id: 5,
      link: "Languages",
      path: "#languages",
      icon: <MdLanguage  className='bg-zinc-200'/>,
    },
    {
      id: 6,
      link: "Contact Me",
      path: "#contactme",
      icon: <FaEnvelope className='bg-zinc-200' />,
    },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <>
      <nav>
        <div className="bg-zinc-200 text-4xl cursor-pointer md:hidden flex justify-end p-4" onClick={toggleMenu}>
          {isOpen ? <IoMdClose className='bg-zinc-200' /> : <AiOutlineMenu className='bg-zinc-200'/>}
        </div>

        <div
          className={`bg-zinc-200 md:flex md:justify-evenly  items-center md:h-16 h-96  font-semibold ${
            isOpen || !isSmallScreen ? " flex flex-col justify-between pb-3 md:pb-0 md:flex-row " : "hidden"
          }`}
        >
          {links.map(({ id, link, path, icon }) => (
             <ScrollLink
             to={path.slice(1)} // Assuming paths start with '#' followed by the section ID
             smooth={true}
             duration={500}
             key={id}
             onClick={() => {
               setIsOpen(false);
               setIsSmallScreen(window.innerWidth < 768);
             }}
           >
             <div className="flex  flex-col items-center cursor-pointer bg-zinc-200">
               <span className=' '>{icon}</span>
               <span className='bg-zinc-200'>{link}</span>
             </div>
           </ScrollLink>
          ))}
        </div>
      </nav>

      {/* Media query to set the flex direction to row for larger screens */}

    </>
  );
}

export default Navbar;
