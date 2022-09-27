import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.black_medium};
  color: ${COLORS.white_default};
  padding: 10px 0;
  -webkit-box-shadow: 0px 2px 5px 0px #000000;
  box-shadow: 0px 2px 5px 0px #000000;
  a {
    color: ${COLORS.gray};
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const CardLogo = styled.a`
  display: flex;
  align-items: center;
  color: ${COLORS.gray};
  cursor: pointer;
  @media (max-width: 769px) {
    position: relative;
    right: 60px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const InvisibleMobile = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;
