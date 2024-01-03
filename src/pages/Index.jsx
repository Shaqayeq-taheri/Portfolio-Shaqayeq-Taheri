
import Navbar from "../components/Navbar";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects";
import BackgroundEducation from "../components/BackgroundEducation";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import ContactMe from "../components/ContactMe";

function Index() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <BackgroundEducation />
      <Skills />
      <Languages />
      <Projects />
      <ContactMe/>
    </div>
  );
}

export default Index;
