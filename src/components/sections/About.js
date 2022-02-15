import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Slider from "react-slick";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/side.png",
    userName: "John Doe",
    subtitle: "Product designer at Dribbble",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "John Doe",
    subtitle: "Product designer at Dribbble",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "John Doe",
    subtitle: "Product designer at Dribbble",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
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
