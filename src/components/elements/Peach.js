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
    image: "images/userauth.png",
    popupLink: ["images/userauth.png"],
    text: 'I worked on this project with 3 other software engineers in training. Our challenge was to create a full-stack PERN e-commerce application utlizing JWT authentication.'
  },
  {
    id: 2,
    title: "Approach",
    category: "approach",
    image: "images/peachtech.png",
    popupLink: [
      "images/peachtech.png",
      "images/db.png"

    ],
    text: 'I was familiar and comfortable working with the PERN stack, but I truly learned the ins and out of what is required in an e-commerce to efficiently centralize your state and logic through Redux.'
  },
  {
    id: 3,
    title: "Results",
    category: "tech",
    image: "images/peachcheck.png",
    popupLink:  ["images/peachcheck.png"],
    text: "The end product features an Express-based, RESTful API system (with protected API routes), a relational database schema built on PostgreSQL, hashed and salted user data,  the ability to persist guest carts in local storage, page admin functionality and frontend functionality built with React and Redux."
     },

];

const live = "https://www.converge-app.com/";
const code = "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice";

function Peach() {
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
        <h1 className= 'converge-title'>Peach-Studio: Ecommerce Site</h1>

        <div className="project-view">
          <Link to="/converge">
            <i className="icon-arrow-left-circle"></i> Converge
          </Link>
          <Link to="/">
            <i className="icon-home"></i> Home
          </Link>
          <Link to="/port">
          <i className="icon-arrow-right-circle"></i> Portfolio
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

export default Peach;
   




