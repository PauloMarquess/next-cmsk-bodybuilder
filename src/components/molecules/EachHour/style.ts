import styled from "styled-components";
import { COLORS } from "../../../common";
interface EachHoursProps {
  isDay?: boolean;
}
export const EachHours = styled.div<EachHoursProps>`
  width: 100%;
  padding: 5px 0 10px 0;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.primary};
  h6 {
    color: ${({ isDay }) => (isDay ? COLORS.white_default : COLORS.gray_dark)};
  }
`;
