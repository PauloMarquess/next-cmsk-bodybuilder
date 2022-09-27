import styled from "styled-components";

export const CardMobile = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 769px) {
    display: flex;
  }
`;
export const IconCard = styled.img`
  @media (max-width: 769px) {
    width: 50px;
    position: fixed;
    right: 0;
    top: 14px;
  }
`;
