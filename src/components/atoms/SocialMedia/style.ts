import styled from "styled-components";

export const Navigation = styled.nav`
  align-items: center;
  display: none;

  @media (max-width: 769px) {
    display: flex;
    gap: 20px;
    align-items: center;
    img {
      width: 17px;
      filter: grayscale(100%);

      :hover {
        filter: grayscale(0);
      }
    }
  }
`;
