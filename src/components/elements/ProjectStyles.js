import styled from "styled-components";
import px2vw from "../utils/px2vw"



export const Logo = styled.img`
width: 30px;
height: 30px;
margin: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
// export const BoxImage = styled.img`
// height: '50px',
// width: '50px'

// }
// `;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: ${props => props.bgColor};
  height: 100%;
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const BoxImage = styled.img`
  width:200px;
  height: 200px;

`;
export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

