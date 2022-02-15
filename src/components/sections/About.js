import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Slider from "react-slick";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/debug.png",
    userName: "From Nurse to Software Engineer ",
    subtitle: "Debugging expert. The bugs are just different.",
    review:
      "I am a software engineer and former nurse, driven by intellectual curiosity. I'm drawn to understanding how things work and thrive on pursuing the solutions when they don't!My goal is to utilize my creativity, technical skills, and leadership experience to collaboratively develop technology with tangible impact. ",
  },
  {
    id: 2,
    avatar: "images/workflo.png",
    userName: "Development and Design Process ",
    subtitle: "",
    review:
      "Agile methodology. Tools for UI/UX ",
  },
  {
    id: 3,
    avatar: "images/timeline.png",
    userName: "Timeline",
    subtitle: "",
    review:
      "",
  },
  {
    id: 3,
    avatar: "images/maddie1.png",
    userName: "My dog",
    subtitle: "Had to mention the the obvious theme of the dog you see on my site",
    review:
      "The real star of this portfolio site, Maddow. She can't code, but can she eat.",
  },
];

function About() {
  const slidetSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="about">
        <div className="container">
          <Pagetitle title="About Me"/>
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
    
      </div>
    </section>
  );
}

export default About;
