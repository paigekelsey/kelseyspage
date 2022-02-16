import React, { useState, useEffect } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import Portfolio from "./Portfolio";
import {Link} from 'react-router-dom'

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "challenge",
  },
  {
    id: 3,
    text: "tech",
  },
  {
    id: 4,
    text: "approach",
  },
  {
    id: 5,
    text: "result",
  },
];

const allData = [
  {
    id: 1,
    title: "Description",
    category: "challenge",
    image: "images/porty1.png",
    popupLink: ["images/porty1.png"],
    text: 'This is a fully responsive React, ES6, Sass, CSS app. I wanted to create a portfolio that felt unique, that felt like me. I did not want a boring template that stripped me of my personality. This is an going project and I am proud of what it has become.'
  },
  {
    id: 2,
    title: "Approach",
    category: "approach",
    image: "images/custom.png",
    popupLink: [
      "images/custom.png"
    ],
    text: 'I decided to create my own logo and artwork for my portfolio. I utilized Figma, Canva, and Miro for design and wireframing. I have been working on this side project in my own time for several months and have loved seeing it evolve.'
  },
  {
    id: 3,
    title: "Results",
    category: "tech",
    image: "images/porty.png",
    popupLink:  ["images/porty.png"],
    text:'You are already aware of the results, seeing as you are here on this page. I have many ideas on how to expand and to optimize. My stretch goals for this project are to hook it up into a database to store site traffic and interactivity, add a blog section, and to continually improve the design making the responsiveness and user experience more seamless.'  },

];
const live = "https://kelseys.netlify.app/";
const code = "https://github.com/paigekelsey/kelseyspage";
function Port() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [ setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);
// eslint-disable-next-line
  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <div className="container">
<div className="other">
<div className="live-code">
    <br/>
            <span>
        <a href={code} target="_blank" rel="noreferrer">
              <i class="fab fa-github fa-2x"></i>
            </a>
          <a href={live}>
              <i class="fas fa-external-link-alt fa-2x"></i>
            </a>
            </span>
            </div>
        <h1 className= 'converge-title'>My Portfolio Site</h1>
 
        <div className="project-view">
          <Link to="/peach">
            <i className="icon-arrow-left-circle"></i> Peach-Studio
          </Link>
          <Link to="/">
            <i className="icon-home"></i> Home
          </Link>
        </div>
        <div className="single-view-background">
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
    
      </div>
      </div>
      </div>

  );
}

export default Port;
   