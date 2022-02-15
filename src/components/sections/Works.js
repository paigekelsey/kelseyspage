import React from "react";
import Pagetitle from "../elements/Pagetitle";
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
    about: "2d virtual office that allows users to control avatars to initiate proximity-based video-conferencing",
    click: 'See Project Details',
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
    page:'/converge'
  },
  {
    id: 2,
    title: "Peach Studio",
    category: "ecommerce",
    about: "Ecommerce site that includes user and guest functionality.",
    click: 'See Project Details',
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
    page:'/peach'
  }
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
                   <Link to= {item.page}style={{ textDecoration: 'none', overflow:'hidden'}}>
              <div className="project-img">
                <img src={item.image} alt={item.image} layout="responsive" />
              </div>
              <div>
                <p className="name">{item.title}</p>
              </div>
       
              <div className="project-details">
               
                <h2 style={{color: 'white'}} >{item.title}</h2>
                <p style={{color: 'white', fontSize:'20px'}}>{item.about}</p>
               
                 <h1 style ={{color: "rgb(236, 132, 132)", textAlign:'center'}}> {item.click}</h1>
                 <i className="icon-arrow-right-circle" style ={{ textAlign:'center', fontSize:'40px', color: 'rgb(236, 132, 132)'}}></i>
                <div style={{color: 'white', fontSize: "20px"}}className="tools">
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
