import React from "react";
// import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
// import Service from "../elements/Service";

// const servicesData = [
//   {
//     id: 1,
//     icon: "images/service-1.svg",
//     title: "UI/UX design",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#6C6CE5",
//     contentColor: "light",
//   },
//   {
//     id: 2,
//     icon: "images/service-2.svg",
//     title: "Web Development",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#F9D74C",
//     contentColor: "dark",
//   },
//   {
//     id: 3,
//     icon: "images/service-3.svg",
//     title: "Photography",
//     content:
//       "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
//     color: "#F97B8B",
//     contentColor: "light",
//   },
// ];

function Services() {
  return (
    <section id="services">
       <div className="container">
      <div className="col-md-3">
            <div id="maddie" className="text-center text-md-right">
              <img src="/images/fav.png" alt="kelsey" />
            </div>
            </div>
       <Pagetitle title="Skills"/>
            </div>
    </section>
  );
}

export default Services;
