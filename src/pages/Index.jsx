
import Navbar from "../components/Navbar";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects";
import EducationalBackground from "../components/EducationalBackground";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import ContactMe from "../components/ContactMe";


function Index() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <EducationalBackground />
      <Skills />
      <Languages />
      <Projects />
      <ContactMe/>
   
    </div>
  );
}

export default Index;
