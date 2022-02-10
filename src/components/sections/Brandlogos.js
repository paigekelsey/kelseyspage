import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/nodejs.svg",
  },
  {
    id: 2,
    image: "images/react.svg",
  },
  {
    id: 3,
    image: "images/redux.svg",
  },
  {
    id: 4,
    image: "images/javascript.svg",
  },
  {
    id: 5,
    image: "images/rest.svg",
  },
  {
    id: 6,
    image: "images/html.svg",
  },

  {
    id: 7,
    image: "images/css.svg",
  },

  {
    id: 8,
    image: "images/webpack.svg",
  },
  {
    id: 9,
    image: "images/postgresql.svg",
  },

  {
    id: 10,
    image: "images/sequelize.svg",
  },

  {
    id: 11,
    image: "images/mongodb.svg",
  },
  {
    id: 12,
    image: "images/git.svg",
  },


  {
    id: 13,
    image: "images/heroku.svg",
  },
  {
    id: 14,
    image: "images/netlify.svg",
  },

  {
    id: 15,
    image: "images/sass-icon.svg",
  },
  {
    id: 16,
    image: "images/expressjs-icon.svg",
  },
];

function Brandlogos() {
  return (
    <section id="services">
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Brandlogos;
