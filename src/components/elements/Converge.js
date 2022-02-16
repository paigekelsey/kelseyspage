import React, { useState, useEffect } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";

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
    image: "images/verge-tech.png",
    popupLink: ["images/verge-tech.png"],
    text: "This was my final project at Fullstack Academy. Me and 3 other students were given a prompt to create a virtual office where users can move an avatar within a 2d space. When users enter a space with a coworker, a video conference should open up between the two."
  },
  {
    id: 2,
    title: "Approach",
    category: "approach",
    image: "images/verge-miro.png",
    popupLink: [
      "images/verge-wireframe.jpg",
      "images/frame1.jpg",
      "images/frame2.jpg",
      "images/frame3.jpg",
    ],
    text:'We discussed different approaches to accomplish our final goal. MVP Features:  Users can move around a virtual office, Virtual office rendered using Phaser, Video Chats open up between neighboring workers, Login/Signup, forms with React, Users are able to customize their avatar and have this saved when they log in.'
  },
  {
    id: 3,
    title: "Results",
    category: "tech",
    image: "images/youtube.png",
    popupLink: ["https://www.youtube.com/watch?v=5X3TyV4lEkk&feature=youtu.be"],
    text:'We were able to successfully meet our goals and even accomplished a stretch goal of having custom avatars. We enabled this with local storage and using React Forms. Check out our video showing our product!',  },
];

const live = "https://www.converge-app.com/";
const code = "https://github.com/2109-TigerSugar/Converge-2dVirtualOffice";

function Converge() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [setNoMorePost] = useState(false);

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
        <h1 className="converge-title">Converge: 2d Virtual Office</h1>

        <div className="project-view">
          <Link to="/">
            <i className="icon-home"></i> Home
          </Link>
          <Link to="/peach">
            Next<i className="icon-arrow-right-circle"></i>
          </Link>
          <div>
          
          </div>
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

export default Converge;

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
