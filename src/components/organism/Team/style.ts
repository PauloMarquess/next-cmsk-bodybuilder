import styled from "styled-components";
import { COLORS } from "../../../common";
import { CardButton } from "../../atoms/ButtonLink/style";

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  color: ${COLORS.white_default};
  h1 {
    text-transform: uppercase;
    padding-bottom: 6px;
  }
`;
export const Divider = styled.div`
  width: 60%;
  height: 4px;
  background-color: ${COLORS.primary};
`;

export const CardTeacher = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 769px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
  }
`;

export const Teacher = styled.div`
  background-color: white;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 21%;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 20px;
  color: ${COLORS.white_100};
  align-items: center;
  background-color: #1313149c;
  border-radius: 8px;
  position: relative;
  height: 550px;

  img {
    width: 300px;
    height: 380px;
    position: relative;
    filter: drop-shadow(0px 0px 1px ${COLORS.primary});
  }
  #charles {
    height: 310px;
    top: 70px;
  }
  #aline {
    right: 20px;
    top: 30px;
  }
  #vinicius {
    position: relative;
  }
  #harley {
    position: relative;
    top: 60px;
    width: 330px;
  }
  #janaina {
    top: 40px;
  }
  #monica {
    top: 50px;
    right: 20px;
    width: 380px;
  }
  #anderson {
    width: 260px;

    top: 50px;
    height: 370px;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    width: 0ch;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  gap: 10px;
  background-color: green;
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.primary};
  color: ${COLORS.black_medium};
  h1 {
    width: 100%;
  }
  p {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    filter: brightness(20%);

    :hover {
      filter: brightness(0%);
    }
  }
`;

export const ButtonModal = styled.button`
  background: ${COLORS.third};
  color: ${COLORS.black};
  padding: 15px 20px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 auto;
  border: 2px solid ${COLORS.third};
  width: 80%;
  text-align: center;

  box-shadow: 0px 0px 1px 0px #000;

  :hover {
    font-weight: bold;
    background-color: ${COLORS.black_medium};
    color: ${COLORS.third};
  }
`;
