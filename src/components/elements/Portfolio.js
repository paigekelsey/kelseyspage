import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Portfolio({ portfolio }) {
  const { title, image, popupLink, link, text} = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link"></i>;
    } else if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder"></i>;
       
        }
        return <i className="icon-picture"></i>;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder"></i>;
      } else {
        return <i className="icon-magnifier-add"></i>;
      }
    }
    return <i className="icon-magnifier-add"></i>;
  };
  return (
    <>
    <div >
      <a
        href={link ? link : "!#"}
        className="work-image"
        onClick={handleLightbox}
      >
        <div className="portfolio-item rounded shadow-dark" id='port-item'>
          <div className="details-details">
            {/* <span className="term text-capitalize">{category}</span> */}
            <h6 className="title">{title}</h6>
         
          </div>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <p style={{padding: '20px', color:'black', fontSize: '14px'}}>{text}</p>
            <div className="mask">   <span className="more-button">{handleIcon()}</span>  </div>
         
          </div>
        </div>
      </a>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
      </div>
    </>
  );
}

export default Portfolio;