import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { category, title, image, popupLink, link, live, code} = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  // const handleIcon = () => {
  //   if (link) {
  //     return <i className="icon-link"></i>;
  //   } else if (popupLink) {
  //     if (popupLink.length > 1) {
  //       if (popupLink.toString().match(/youtube/g)) {
  //         return <i className="icon-camrecorder"></i>;
  //       }
  //       return <i className="icon-picture"></i>;
  //     } else if (popupLink.toString().match(/youtube/g)) {
  //       return <i className="icon-camrecorder"></i>;
  //     } else {
  //       return <i className="icon-magnifier-add"></i>;
  //     }
  //   }
  //   return <i className="icon-magnifier-add"></i>;
  // };
  return (
    <>
      <a
        href={link ? link : "!#"}
        className="work-image"
        onClick={handleLightbox}
      >
        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            {/* <span className="more-button">{handleIcon()}</span> */}
          </div>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <div className="mask"></div>
          </div>
        </div>
      </a>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
      <div className = "work-container">
              <div className = "work-left">
                <a href ={live} target="_blank" rel ="noreferrer">
                  <button className = 'btn btn-work' type= 'submit'>
                    <img src="/images/link.svg" alt="site"/>
                  </button>
                  </a>
                  </div>
             <div className = "work-right">
             <a href ={code} target="_blank" rel ="noreferrer">
              <button className = 'btn btn-work' type= 'submit'>
              <img src="/images/code.svg" alt="code"/>
              </button>
              </a>
              </div>
              </div>

    </>
  );
}

export default Portfolio;
