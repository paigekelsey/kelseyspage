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
        {/* End Portfolio Items */}

        {/* <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div> */}
      </div>
      </div>
      </div>

  );
}

export default Peach;
   
// import React from "react";

// import Global from "../layouts/Global"

// import SingleProject from "./SingleProject"






// // id: 1,
// // title: "Converge",
// // image: "images/work.gif",
// // text: '2d virtual app',
// // approach: 'Approach',
// // approachImage: "images/vergey.png",
// // approachText: '4 engineers with 14 days etc.',
// // tech: 'Tech',
// // techImage: 'images/vergetech.png',
// // techText: 'new technologies utilized phaser socket io',
// // design:'Design',
// // designImage: 'images/verge-wireframe.jpg',
// // designText: 'wireframing, tilemaps',
// //   },
// //   {
// //       id: 2,
// //       title: "Peach-Studio",
// //       image: "images/work.gif",
// //       text: '2d virtual app',
// //       approach: 'Approach',
// //       approachImage: "images/vergey.png",
// //       approachText: '4 engineers with 14 days etc.',
// //       tech: 'Tech',
// //       techImage: 'images/vergetech.png',
// //       techText: 'new technologies utilized phaser socket io',
// //       design:'Design',
// //       designImage: 'images/verge-wireframe.jpg',
// //       designText: 'wireframing, tilemaps',
// //           },

// const data = [
//   {
//     id: 1,
//     title: "The Challenge",
//     text: 'Build a 2d virtual office for people who work remotely. Utilize new technologies, PhaserJS, socket.io, and webrtc to intergrate peer to peer video conferencing.',
//     bgColor: "#D5CAFA",
//     image:"images/work.gif"
//   },
//   {
//     id: 2,
//     title: "The Tech",
//     text: "",
//     bgColor: "#EDA9A9",
//     image:"images/vergetech.png"
//   },
//   // {
//   //   id: 3,
//   //   title: "The Approach",
//   //   text: "Design, discussion, wireframing, implementation.",
//   //   bgColor: "#F2EE8D",
//   //   image: "images/verge-wireframe.jpg"
//   // },
//   // {
//   //   id: 4,
//   //   title: "The Execution",
//   //   text: 'Used tiled to create tilemaps, created ice candidates',
//   //   bgColor: "#9FEACD",
//   //   image: "images/vergey.png"
//   // }
// ];

// function Converge() {
//   return (
//     <>
//       <Global />
//       <h2 style={{textAlign: 'center'}}>Converge</h2>
//       <SingleProject boxData={data} />
//      <div className='container'>
//        <img src= 'images/verge-wireframe.jpg' alt='kelsey'></img>
//      </div>
//       </>
//       )
// }

// export default Converge;