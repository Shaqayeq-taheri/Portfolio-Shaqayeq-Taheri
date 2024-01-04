import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const links = [
 
    {
      id: 1,
      link: "About Me",
      path:'/aboutme'
    },
    {
      id: 2,
      link: "My Projects",
      path:'/projects'
    },
    {
      id: 3,
      link: "Skills",
      path:'/skills'
    },
    {id:4,
    link:'Educational Background',
  path:'/backgroundEducation'},
    {
      id: 5,
      link: "Contact Me",
      path:'/contactme'
    },
  ];
  return <div className="flex justify-between p-5 bg-gray-200">

    <div>
      Shaqayeq Taheri
    </div>
  
    <div className="flex  " >
      <nav className="flex gap-8 text-xl bg-gray-200">
        {links.map(({id, link,path})=>(
          <NavLink to={path} className="bg-gray-200" key={id}>{link}</NavLink>
        ))}
      </nav>

      
    </div>
  
  </div>;
}

export default Navbar;
