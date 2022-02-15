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
      "I am a software engineer and former nurse, driven by intellectual curiosity. My goal is to utilize my creativity, technical skills, and leadership experience to collaboratively develop technology with tangible impact. ",
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
          <Pagetitle title="About Me" />
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

// const aboutContent = {
//   name: "Kelsey",
//   avatarImage: "/images/side.png",
//   content:
//     "I'm a software engineer that loves making impactful and seamless products. Prior to web development I was a registered nurse. My desire to help others has translated into my tech career, driving me to create meaningful and user-friendly applications.",
// };

// const downloadTag = "My Resume"

// const curriculumLink = (
//   <div className="mt-3">
//   <th>
//     <a href="/images/KSCV.pdf" target="_blank">
//       <button className="btn btn-default">
//         <div>{downloadTag}</div>
//       </button>{" "}
//     </a>
//   </th>
//   </div>
// )


// function About() {
//   return (
//     <section id="about">
//       <div className="container">
//         <Pagetitle title="About Me" />
//         <div className="row">
//           <div className="col-md-3">
//             <div className="text-center text-md-left">
//               <img src={aboutContent.avatarImage} alt={aboutContent.name} />
//             </div>
//           </div>
//           <div className="col-md-9 triangle-left-md triangle-top-sm">
//             <div className="rounded bg-white shadow-dark padding-30">
//                 <div className="col-md-6">
//                   {aboutContent.content}
//                   <table
//           data-aos="zoom-in"
//           data-aos-duration="1500"
//           className="downloadCV"
//         >
//           <tbody>
//             <tr>{curriculumLink}</tr>
//           </tbody>
//         </table>
     
//                   {/* 
//                     <a href="!#" >
//                       Download CV
//                     </a>
//                   </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
