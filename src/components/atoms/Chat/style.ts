import styled from "styled-components";

export const CardWhatsapp = styled.a`
  position: fixed;
  bottom: 1%;
  right: 2%;
  cursor: pointer;
  width: 140px;
  z-index: 11;
  @media (max-width: 769px) {
    bottom: 0;
    right: -3%;
    width: 100px;
  }
`;
