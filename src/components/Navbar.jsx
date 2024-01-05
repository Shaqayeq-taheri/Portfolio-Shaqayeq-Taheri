import { NavLink } from "react-router-dom";
import { FaUser, FaGraduationCap, FaLaptopCode, FaToolbox, FaEnvelope } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function Navbar() {
  const links = [
    {
      id: 1,
      link: "About Me",
      path: "/aboutme",
      icon: <FaUser className="bg-slate-200"/>,
    },
    {
      id: 2,
      link: "Educational Background",
      path: "/educationalbackground",
      icon: <FaGraduationCap className="bg-slate-200" />,
    },

    { id: 3, link: "Projects", path: "/projects", icon: <FaLaptopCode className="bg-slate-200" />, },
    {
      id: 4,
      link: "Skills",
      path: "/skills",
      icon: <FaToolbox className="bg-slate-200" />
    },
    { id: 5, link: "Languages", path: "/languages",    icon: <MdLanguage className="bg-slate-200" />, },
    {
      id: 6,
      link: "Contact Me",
      path: "/contactme",
      icon: <FaEnvelope className="bg-slate-200" />,
    },
  ];
  return (
    <>
      <nav className="flex justify-evenly gap-8 text-xl  bg-slate-200 p-4 ">
        {links.map(({ id, link, path,icon }) => (
          <NavLink to={path} className="bg-slate-200 flex flex-col items-center" key={id}>
            {icon}{link}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
