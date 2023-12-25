import React from "react";
import Index from "./pages/Index";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import Aboutme from "../src/components/Aboutme";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import BackgroundEducation from "../src/components/BackgroundEducation";
import ContactMe from "../src/components/ContactMe";
import Footer from "../src/components/Footer";
import Languages from "./components/Languages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route
              path="/backgroundEducation"
              element={<BackgroundEducation />}
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
