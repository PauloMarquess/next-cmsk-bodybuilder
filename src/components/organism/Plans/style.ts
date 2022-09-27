import { COLORS } from "./../../../common/index";
import styled from "styled-components";

export const LegensPlan = styled.h1`
  margin: 50px 0;
  text-align: center;

  span {
    color: ${COLORS.primary};
  }
  @media (max-width: 769px) {
    margin: 50px 0 25px 0;
  }
`;

export const CardPlans = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  color: ${COLORS.white_default};
  @media (max-width: 769px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 30px;
  }
`;
export const CardPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  padding: 22px;
  border-radius: 8px;
  background-color: red;
  width: 26%;
  height: 60vh;
  position: relative;
  background-color: ${COLORS.third};
  color: black;
  margin-bottom: 50px;
  transition: all 0.5s ease;
  min-width: 300px;

  :nth-child(2),
  :nth-child(4) {
    background-color: ${COLORS.black};
    width: 28%;
    min-width: 330px;
    height: 65vh;
    color: ${COLORS.gray};
  }

  @media (max-width: 769px) {
    width: 100%;
    height: 70vh;
    :hover {
      width: 100%;
      bottom: 0;
    }
    :nth-child(2) {
      width: 100%;
      height: 70vh;
    }
  }
`;
export const ListBenefit = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    width: 15px;
  }
`;

export const Cifrao = styled.span`
  position: relative;
  bottom: 20px;
  font-size: 12px;
`;
export const Price = styled.span`
  font-size: 30px;
  font-weight: bolder;
`;
export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: ${COLORS.white_default};
  position: relative;
  bottom: 10px;
`;
export const CrownAbsolute = styled.img`
  width: 70px;
  position: absolute;
  top: -5px;
  left: -25px;
  transform: rotate(320deg);
`;
