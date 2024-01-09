import {useState,useEffect} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import contactMe from '/src/assets/images/contact.svg'

function ContactMe() {
  const [iconSize, setIconSize] = useState(80);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIconSize(50); // Set smaller size for smaller screens
      } else {
        setIconSize(80); // Set default size for larger screens
      }
    }

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className= " bg-zinc-100 pt-10 pb-20" id="contactme">
      <h5 className="md:text-4xl text-2xl  text-center bg-zinc-100 font-bold ">
        Contact Me
      </h5>
      <div className="flex flex-wrap gap-10 bg-zinc-100 ">
        <img
          src={contactMe}
          className="bg-zinc-100 p-10"
          alt="contact me"
        />
        <div className="flex md:flex-col mx-auto justify-center gap-10 bg-zinc-100 md:mt-44 mt-10 pr-5 pl-5">
          <a href="https://www.linkedin.com/in/shaqayeq-taheri-328697254/" target="blank">
            <FaLinkedin size={iconSize} className="hover:animate-pulse bg-zinc-100" />
          </a>
          <a href="https://github.com/Shaqayeq-taheri" target="blank">
            <FaGithub size={iconSize} className="hover:animate-pulse bg-zinc-100" />
          </a>
          <a href="mailto:shaqayeq.taheri@gmail.com" target="blank">
            <HiOutlineMail
              size={iconSize}
              className="hover:animate-pulse bg-zinc-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
