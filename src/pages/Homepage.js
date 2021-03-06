import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import About from "../components/sections/About";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";
import Skillz from "../components/sections/Skills"

function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/side.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
  
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-brandlogos">
             <Skillz />
        </Element>
        <Element name="section-services">
             <Services/>
             <Brandlogos />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
