import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Portfolio from "./Portfolio";

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
    title: "Create video-conferencing app using new technologies",
    category: "challenge",
    image: "images/work.gif",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 2,
    title: "Technologies",
    category: "tech",
    image: "images/vergetech.png",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
  },
  {
    id: 3,
    title: "Delivery App Wireframe",
    category: "tech",
    image: "images/works/3.svg",
    popupLink: ["https://www.youtube.com/watch?v=qf9z4ulfmYw"],
  },
  {
    id: 4,
    title: "Onboarding Motivation",
    category: "result",
    image: "images/works/4.svg",
    popupLink: [
      "https://www.youtube.com/watch?v=URVHRhBSjj8",
      "https://www.youtube.com/watch?v=qf9z4ulfmYw",
    ],
  },
  {
    id: 5,
    title: "iMac Mockup challenge",
    category: "approach",
    image: "images/works/5.svg",
    popupLink: ["images/works/5.svg"],
  },
  {
    id: 6,
    title: "Game Store App Concept",
    category: "challenge",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  },
  {
    id: 7,
    title: "Project Managment Illustration",
    category: "approach",
    image: "images/works/3.svg",
    link: "https://pinterest.com",
  },
  {
    id: 8,
    title: "Guest App Walkthrough Screens",
    category: "challenge",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 9,
    title: "Delivery App Wireframe",
    category: "tech",
    image: "images/works/4.svg",
    popupLink: ["images/works/4.svg"],
  },
  {
    id: 10,
    title: "Game Store App Concept",
    category: "challenge",
    image: "images/works/6.svg",
    link: "https://dribbble.com",
  },
  {
    id: 11,
    title: "Project Managment Illustration",
    category: "approach",
    image: "images/works/3.svg",
    link: "https://pinterest.com",
  },
  {
    id: 12,
    title: "Guest App Walkthrough Screens",
    category: "challenge",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 13,
    title: "Delivery App Wireframe",
    category: "tech",
    image: "images/works/4.svg",
    popupLink: ["images/works/4.svg"],
  },
];

function Other() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

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
<div className="other">
      <div className="container">
        <h3 className= 'converge-title'>Converge</h3>
        {/* Stapproach Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}
        <div className="single-view-background">
        {/* Stapproach Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
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
        </div>
      </div>
      </div>
      </div>

  );
}

export default Other;