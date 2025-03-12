import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Works from "../components/Works";

const Homepage = () => {
  return (
    <div>
      <About />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
