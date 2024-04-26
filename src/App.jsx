import Index from "./pages/Index";
import Aboutme from "../src/components/Aboutme";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import EducationalBackground from "../src/components/EducationalBackground";
import ContactMe from "../src/components/ContactMe";
import Languages from "./components/Languages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/aboutme" element={<Aboutme />} />
            <Route
              path="/backgroundEducation"
              element={<EducationalBackground />}
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
