import { images } from "./../../../assets/index";
import styled from "styled-components";
import { COLORS } from "../../../common";

interface ContainerProps {
  column?: boolean;
  justify?: string;
  align?: string;
  background?: string;
  responsive?: boolean;
  hresponsive?: boolean;
  height?: string;
  width?: string;
  backgroundColor?: boolean;
  backgroundParallax?: boolean;
  padding?: string;
  margin?: string;
}
export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  background: ${({ background }) => background || "none"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && `${COLORS.black_light}`};
  background-image: ${({ backgroundParallax }) =>
    backgroundParallax && `url(${images.parallax})`};
  background-attachment: ${({ backgroundParallax }) =>
    backgroundParallax && `fixed`};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  @media (max-width: 769px) {
    flex-direction: ${({ responsive }) => (responsive ? "column" : "row")};
    padding: 0 20px;
    height: ${({ hresponsive }) => (hresponsive ? "100vh" : "auto")};
  }
`;
