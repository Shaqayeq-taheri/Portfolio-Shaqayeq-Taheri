import Navbar from "../components/Navbar";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects";
import EducationalBackground from "../components/EducationalBackground";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import ContactMe from "../components/ContactMe";
import BackToTopButton from "../components/BackToTopButton";

function Index() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <EducationalBackground />
      <Projects />
      <Skills />
      <Languages />

      <ContactMe />
      <BackToTopButton />
    
    </div>
  );
}

export default Index;
