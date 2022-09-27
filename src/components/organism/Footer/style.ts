import styled from "styled-components";
import { COLORS } from "../../../common";

export const ContainerFooter = styled.footer`
  width: 100%;
  padding: 40px 30px;
  color: ${COLORS.gray_dark};
  background: ${COLORS.black_light};
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 796px) {
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;

    h2 {
      text-align: start;
    }
  }
`;

export const LogoCard = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
export const OpeningHours = styled.div`
  width: 25%;
  h2 {
    margin-bottom: 20px;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const ContactCard = styled.div`
  @media (max-width: 769px) {
    width: 100%;
  }
`;
export const Contact = styled.div`
  width: 100%;
  margin-top: 32px;
  a {
    color: #aaa;
    :hover {
      color: ${COLORS.white_default};
    }
  }
  h4 {
    margin: 20px 0 10px 0;
  }
  h4 a {
    color: ${COLORS.white_default};
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
