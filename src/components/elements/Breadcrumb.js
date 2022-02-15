
   
import React from 'react';
import Breadcrumb from './Breadcrumb';

function PortfolioHeader({ routes, headerImage, imageAlt, headerTitle, headerSubtitle, headerDescription, headerDisciplines }) {
  return (
    <>
      <Breadcrumb routes={routes} className="feature-width" />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="project-title filter">
            <div className="image left">
              <img src={headerImage} alt={`${imageAlt}`}/>
            </div>
            <div className="title-content">
              <h1>{headerTitle}</h1>
              <h2>{headerSubtitle}</h2>
            </div>
          </div>
          <div className="summary flex row">
            <div className="section">
              <h3>About</h3>
              <p>{headerDescription}</p>
            </div>
            <div className="section">
              <h3>Disciplines</h3>
              <ul className="tags">
                {headerDisciplines.map( discipline => (<li key={discipline}>{discipline}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioHeader;