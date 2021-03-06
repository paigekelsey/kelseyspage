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
      "I am a software engineer and former nurse, driven by intellectual curiosity. I'm drawn to understanding how things work and thrive on pursuing the solutions when they don't! My goal is to utilize my creativity, technical skills, and leadership experience to collaboratively develop technology with tangible impact. ",
  },
  {
    id: 2,
    avatar: "images/workflo.png",
    userName: "Development and Design Process ",
    subtitle: "",
    review:
      "I value simple content structure, clean design patterns, and thoughtful content. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.",
  },
  {
    id: 3,
    avatar: "images/timeline.png",
    userName: "Timeline",
    subtitle: "",
    review: "After 10 years as a registered nurse, the urge to switch contexts and dive further into tech grew too strong to ignore. I left the security and stability I had always known to focus solely on honing and growing my programming skills. My passion for engineering and developing is unmatched. I love every aspect of bringing an idea to life and find each step of the process equally exciting."
  },
  {
    id: 3,
    avatar: "images/maddie1.png",
    userName: "My dog",
    subtitle: "Had to mention the obvious theme of the dog you see on my site",
    review:
      "The real star of this portfolio site, Maddow. She has a love and passion for food. Her languagues include Treats, More Treats and Peanut Butter. She can't code, but can she eat.",
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
        <ul id="myresume" >
          <li className="list-inline-item"> 
            <a href="images/KelseySmithResume.pdf" target='_blank' rel='noreferrer' className='text'>
                <img src ="/images/myresume.png" alt='mycv'/>
              
              </a>
            </li>
            </ul>
      </div>
    </section>
  );
}

export default About;
