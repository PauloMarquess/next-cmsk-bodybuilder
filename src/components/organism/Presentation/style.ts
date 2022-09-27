import { COLORS } from "./../../../common/index";
import styled from "styled-components";

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: center;
  z-index: 3;
  gap: 20px;
  position: relative;
  right: 100px;
  bottom: 50px;
  transition: 1s;
  animation: show 1.5s both;
  color: ${COLORS.white_default};
  a {
    width: 30%;
  }
  h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
  }
  h1 {
    font-size: 4.8rem;
    width: 70%;
    margin: 0 auto;
    text-transform: uppercase;
  }
  h6 {
    font-size: 1.2rem;
    font-family: 700;
  }
  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @media (max-width: 769px) {
    margin-top: 220px;
    width: 100%;
    right: 0;
    height: 500px;
    a {
      width: 100%;
    }
    h2 {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export const Images = styled.img`
  position: relative;
  left: 200px;
  top: 60px;
  width: 40%;
  border-radius: 28px;
  @media (max-width: 769px) {
    top: 140px;
    width: 100%;
    position: absolute;
    left: 0;
    opacity: 0.2;
    border-radius: 0;
  }
`;
