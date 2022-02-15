import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, BoxTitle, BoxText, BoxImage } from "./ProjectStyles"



export default function SingleProject({ boxData }) {
 
  return (
    <>
      <div className="project-view-container">
        <div className="project-view">
          <Link to="/">
            <i className="icon-home"></i> Home
          </Link>
          <Link to="/peach">
            Next Project <i className="icon-arrow-right-circle"></i>
          </Link>
        </div>
      </div>
      <Container>
        {boxData.map((box) => (
          <Box key={box.id} bgColor={box.bgColor}>
            <BoxTitle>{box.title}</BoxTitle>

            <BoxImage src={box.image} alt="kelsey"/>
        < BoxText>{box.text}</BoxText>
          </Box>
        ))}
      </Container>
    </>
  );
}
