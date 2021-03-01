import React from "react";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";

import Hero from "../page-sections/Hero.js";
import About from "../page-sections/About.js";
import Portfolio from "../page-sections/Portfolio.js";
import Services from "../page-sections/Services.js";
import Contact from "../page-sections/Contact.js";

export default function Home() {
  return (
    <div id="top">
      <SEO
        title="Home"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
