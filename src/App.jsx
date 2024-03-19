import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <div className="w-full">
      <Headroom>
        <Navbar toggleSidebar={toggleSidebar} />
      </Headroom>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <LandingPage />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer /> 
    </div>
  );
};

export default App;
