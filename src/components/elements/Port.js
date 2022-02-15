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
    popupLink: ["images/peach-tech.png"],
    text: 'I worked on this project with 3 other engineers. We weregiven a prompt to create a 2d Virtual Office with video-chat features utilizing PhaserJS game interface to move around custom avatars.'
  },
  {
    id: 2,
    title: "Approach",
    category: "approach",
    image: "images/peachtech.png",
    popupLink: [
      "images/verge-wireframe.jpg",
      "images/frame1.jpg",
      "images/frame2.jpg",
      "images/frame3.jpg",
    ],
    text: 'I worked on this project with 3 other engineers. We weregiven a prompt to create a 2d Virtual Office with video-chat features utilizing PhaserJS game interface to move around custom avatars.'
  },
  {
    id: 3,
    title: "Results",
    category: "tech",
    image: "images/peachcheck.png",
    popupLink:  ["https://www.youtube.com/watch?v=5X3TyV4lEkk&feature=youtu.be"],
    text: 'I worked on this project with 3 other engineers. We weregiven a prompt to create a 2d Virtual Office with video-chat features utilizing PhaserJS game interface to move around custom avatars.'
  },

];
const live = "https://www.converge-app.com/";
const code = "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice";
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
        <h1 className= 'converge-title'>My Portfolio Site</h1>
        <div className="live-code">
            <span>
        <a href={code} target="_blank" rel="noreferrer">
              <i class="fab fa-github fa-3x"></i>
            </a>
          <a href={live}>
              <i class="fas fa-external-link-alt fa-3x"></i>
            </a>
            </span>
            </div>
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
   