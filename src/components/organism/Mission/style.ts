import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardMission = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 20px;
  padding-right: 100px;
  span {
    font-weight: bolder;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2.2rem;
  }
  h2 {
    font-size: 1.1rem;
  }

  @media (max-width: 769px) {
    width: 100%;
    margin: 50px 0;
    padding-right: 0px;
    span {
      font-size: 18px;
    }
    h1 {
      width: 100%;
      font-size: 1rem;
    }
    h2 {
      width: 80%;
      span {
        display: none;
      }
    }
    h3 {
      font-size: 16px;
    }
  }
`;
export const Destak = styled.span`
  color: ${COLORS.primary};
`;

export const ImageMission = styled.div`
  img {
    width: 620px;
    height: 420px;
    border-radius: 14px;
  }
  @media (max-width: 769px) {
    img {
      position: relative;
      width: 100%;
      height: auto;
      bottom: 30px;
    }
  }
`;
export const ListObjtive = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 25px;
  }
  img {
    width: 30px;
  }
`;
