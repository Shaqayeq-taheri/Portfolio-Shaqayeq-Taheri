import { NavLink } from "react-router-dom";
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
      icon: <FaUser  />,
    },
    {
      id: 2,
      link: "Educational Background",
      path: "#backgroundEducation",
      icon: <FaGraduationCap  />,
    },

    {
      id: 3,
      link: "Projects",
      path: "#projects",
      icon: <FaLaptopCode  />,
    },
    {
      id: 4,
      link: "Skills",
      path: "#skills",
      icon: <FaToolbox  />,
    },
    {
      id: 5,
      link: "Languages",
      path: "#languages",
      icon: <MdLanguage  />,
    },
    {
      id: 6,
      link: "Contact Me",
      path: "#contactme",
      icon: <FaEnvelope />,
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
        <div className="text-4xl cursor-pointer md:hidden flex justify-end p-4" onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <AiOutlineMenu />}
        </div>

        <div
          className={`md:flex justify-evenly p-4 font-semibold ${
            isOpen || !isSmallScreen ? "flex-col md:flex-row gap-10 " : "hidden"
          }`}
        >
          {links.map(({ id, link, path, icon }) => (
            <a
              href={path}
              className=""
              key={id}
              onClick={() => {
                setIsOpen(false);
                setIsSmallScreen(window.innerWidth < 768);
              }}
            >
              <div className="flex flex-col items-center ">
                <span >{icon}</span>
                <span>{link}</span>
              </div>
            </a>
          ))}
        </div>
      </nav>

      {/* Media query to set the flex direction to row for larger screens */}
      <style>
        {`
          @media (min-width: 768px) {
            .md\\:flex-col.md\\:flex-row {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
