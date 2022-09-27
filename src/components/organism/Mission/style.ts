import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardMission = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 20px;
  padding-right: 100px;
  span {
    color: ${COLORS.primary};
    font-weight: bolder;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2.2rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  @media (max-width: 769px) {
    width: 100%;
    margin: 50px 0;
    padding-right: 0px;

    h1 {
      width: 100%;
      font-size: 1rem;
    }
    h3 {
      width: 80%;
      span {
        display: none;
      }
    }
  }
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
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 25px;
  }
`;
