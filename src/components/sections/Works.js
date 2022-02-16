import React from "react";
import Pagetitle from "../elements/Pagetitle";

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
    image: "images/theverge.png",
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
    image: "images/peachy.png",
    live: "https://peach-studio.herokuapp.com/",
    code: "https://github.com/PeachPanthers/GraceShopper",
    tools: [
      "React/Redux",
      "Nodejs/Express",
      "MongoDB",
      "Wordpress Api",
      "Calendly",
    ],
    page:'/peach'
  },
  {
    id: 3,
    title: "Kelsey's Portfolio",
    category: "personal",
    about: "The site you are on right now!",
    click: 'See Project Details',
    image: "images/porty.png",
    live: "https://kelseys.netlify.app/",
    code: "https://github.com/paigekelsey/kelseyspage",
    tools: [
      "React/Redux",
      "Nodejs/Express",
      "MongoDB",
      "Wordpress Api",
      "Calendly",
    ],
    page:'/port'
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
                  
              <div className="project-img">
                <img src={item.image} alt={item.image} layout="responsive" />
              </div>
              <div>
               
              </div>
       
              <div className="project-details">
              <a href= {item.page}style={{ textDecoration: 'none', overflow:'hidden'}}>
                <h3 style= {{color: 'white'}}>{item.title}</h3>
                <h3 style={{color: "rgb(236, 132, 132)"}} >Click to See Project Details</h3>
                </a>
                <p style={{color: 'white', fontSize:'20px'}}>{item.about}</p>
                <div className="works-hover">
                            <a href={allData[0].code} target="_blank" rel="noreferrer"><i class="fab fa-github fa-3x"></i></a>
                            <a href={allData[0].live}><i class="fas fa-external-link-alt fa-3x"></i></a>
                            </div>
              </div>
          
           <p>{item.title}</p>
          
        
            </div>
          ))}
        
        </div>
       
      </div>
  
    </section>
  );
};

export default Works;
