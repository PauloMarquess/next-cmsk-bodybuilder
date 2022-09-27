import { COLORS } from "./../../../common/index";
import styled from "styled-components";

export const ButtonAnimations = styled.a`
  overflow: hidden;
  position: relative;
  background: ${COLORS.third};
  color: ${COLORS.black};
  padding: 15px 20px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 auto;
  border: 3px solid ${COLORS.third};
  width: 100%;
  text-align: center;
  transition: 0.5s;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );

  :hover {
    font-weight: bold;
    background-color: ${COLORS.black_medium};
    color: ${COLORS.third};
    clip-path: polygon(
      19% 0,
      70% 0,
      100% 0,
      100% 100%,
      75% 100%,
      27% 100%,
      0 100%,
      0 0
    );
  }

  &:after {
    background: ${COLORS.white_dark};
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.5;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    width: 50px;
    z-index: 10;
    animation: 4s infinite cubic-bezier;
  }

  @keyframes cubic-bezier {
    from {
      left: -75px;
    }
    to {
      left: 120%;
    }
  }
`;
