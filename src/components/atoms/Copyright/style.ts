import styled from "styled-components";
import { COLORS } from "../../../common";

export const CopyrightStyle = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.black_light};
  color: ${COLORS.gray};
  width: 100%;
  gap: 5px;
  @media (max-width: 769px) {
    flex-direction: column;
  }

  a {
    font-weight: bolder;
    margin-left: 5px;
    color: ${COLORS.gray};
    :hover {
      font-size: 16.5px;
    }
    @media (max-width: 769px) {
      font-size: 13px;
    }
  }
  @media (max-width: 769px) {
    width: 100%;
    font-size: 12px;
  }
`;
