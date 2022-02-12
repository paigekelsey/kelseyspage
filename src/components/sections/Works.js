import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Single from '../elements/Single'
import {Link} from 'react-router-dom'
// import Portfolio from "../elements/Portfolio";

// const filters = [
//   {
//     id: 1,
//     text: "Everything"
//   },
//   {
//     id: 2,
//     text: "capstone",
//   },
//   {
//     id: 3,
//     text: "ecommerce",
//   },
//   {
//     id: 4,
//     text: "personal",
//   },
// ];

const allData = [
  {
    id: 1,
    title: "Converge",
    category: "capstone",
    about: "2d virtual office",
    image: "images/vergey.png",
    live: "https://www.converge-app.com/",
    code: "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice",
    tools: [
      "React",
      "Nodejs/Express",
      "PhaserJS",
      "Socket.io",
      "WebRTC",
    ],
    page:{Single}
  },
  {
    id: 2,
    title: "Peach Studio",
    category: "ecommerce",
    about: "jwt authentication",
    image: "images/stu.png",
    live: "https://peach-studio.herokuapp.com/",
    code: "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice",
    tools: [
      "React/Redux",
      "Nodejs/Express",
      "MongoDB",
      "Wordpress Api",
      "Calendly",
    ],
    page:{Single}
  },
  {
    id: 3,
    title: "Test",
    category: "personal",
    about:
      "Wedeveloper is a platform for developers across the globe to enhance their skills, get jobs, work on project hereby gaining a lot of experience that is needed in the technology world.",
    image: "/images/mac.png",
    live: "https://peach-studio.herokuapp.com/",
    code: "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice",
    tools: [
      "React/Redux",
      "Nodejs/Express",
      "MongoDB",
      "Wordpress Api",
      "Calendly",
    ],
    page:{Single}
  },
];

const Works = () => {
  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <div className="project-wrapper">
          {allData.map((item, i) => (
            <div key={i} className="project">
              <div className="project-img">
                <img src={item.image} alt={item.image} layout="responsive" />
              </div>
              <div>
                <p className="name">{item.title}</p>
              </div>
              <Link to= {"/converge"}style={{ textDecoration: 'none', overflow:'hidden'}}>
              <div className="project-details">
               
                <h3 style={{color: 'white'}} >{item.title}</h3>
                <p style={{color: 'white'}}>{item.about}</p>
    
                <div style={{color: 'white'}}className="tools">
                  {item.tools.map((tool, i) => (
                    <div key={i}>  {tool}</div>
                  ))}
               
                </div>
              
              </div>
              </Link>
              
              
            </div>
          ))}

        </div>
      </div>
  
    </section>
  );
};

export default Works;
