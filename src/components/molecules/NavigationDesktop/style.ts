import styled from "styled-components";
import { COLORS } from "../../../common";

export const Navigation = styled.ul`
  display: flex;
  gap: 30px;
  a {
    font-weight: bold;
    :hover {
      color: ${COLORS.secondary};
    }
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const Media = styled.img`
  width: 20px;
  height: 20px;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
  }
`;
