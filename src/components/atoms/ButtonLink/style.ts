import styled from "styled-components";
import { COLORS } from "../../../common";

interface CardButtonProps {
  borderRadius?: string;
  boxShadow?: boolean;
}

export const CardButton = styled.a<CardButtonProps>`
  background: ${COLORS.third};
  color: ${COLORS.black};
  padding: 15px 20px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 auto;
  border: 2px solid ${COLORS.third};
  width: 100%;
  text-align: center;
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  box-shadow: ${({ boxShadow }) => boxShadow && "0px 0px 2px 0px #000;"};

  :hover {
    font-weight: bold;
    background-color: ${COLORS.black_medium};
    color: ${COLORS.third};
  }
`;
