import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} className="text-white " />
        </>
      ),
      href: "https://www.linkedin.com/in/shaqayeq-taheri-328697254/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={40} className="text-white" />
        </>
      ),
      href: "https://github.com/Shaqayeq-taheri",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:shaqayeq-taheri@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={40} />
        </>
      ),
      href: "/cv.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;