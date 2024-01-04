import { NavLink } from "react-router-dom";


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
  return(

  
    <>
      <nav className="flex justify-evenly gap-8 text-2xl  bg-slate-200 p-5 ">
        {links.map(({id, link,path})=>(
          <NavLink to={path} className="bg-slate-200" key={id}>{link}</NavLink>
        ))}
      </nav>

      
    </>
  )
}

export default Navbar;
