import React from "react";
// import TrackVisibility from "react-on-screen";
// import Pdf from '../Documents/Document.pdf';
import Pagetitle from "../elements/Pagetitle";
// import Skill from "../elements/Skill";

const aboutContent = {
  name: "Kelsey",
  avatarImage: "/images/side.png",
  content:
    "I'm a software engineer that loves making impactful and seamless products. Prior to web development I was a registered nurse. My desire to help others has translated into my tech career, driving me to create meaningful and user-friendly applications.",
};


function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
          </div>
          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
                <div className="col-md-6">
                  {aboutContent.content}
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
