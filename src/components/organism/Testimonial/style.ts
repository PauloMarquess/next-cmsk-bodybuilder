import styled from "styled-components";
import { COLORS } from "../../../common";
import { icons } from "../../../assets";

export const SectionTestimonial = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  height: 70vh;
  background: ${COLORS.white_default};
  position: relative;

  @media (max-width: 769px) {
    height: auto;
    padding: 50px 5px;
    width: 100%;
  }
`;
export const Background = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: calc(50% - 250px);
  right: 80%;
  transform: rotate(45deg);
`;

export const CardTestimonial = styled.div`
  align-self: center;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.black};
  span {
    color: ${COLORS.primary};
  }
`;

export const SlideContainer = styled.div`
  margin: auto 0;
  .swiper {
    padding: 60px 0;
    width: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 83%;
    margin: 0 35%;
    padding: 20px;
    width: 100px;
    height: 100px;
    z-index: 1;

    @media (max-width: 860px) {
      display: none;
    }
  }
  .swiper-button-next {
    content: url(${icons.arrowRight});
  }
  .swiper-button-prev {
    content: url(${icons.arrowLeft});
  }
  .swiper-pagination-bullet {
    background-color: ${COLORS.black};
    border: 3px solid ${COLORS.white_default};
    padding: 4px;
  }
  .swiper-pagination-bullet-active {
    border: 3px solid ${COLORS.primary};
  }
  .swiper-pagination-horizontal,
  .swiper-pagination-fraction {
    width: auto;
    left: calc(50% - 64px);
    @media (max-width: 769px) {
      bottom: 70px;
    }
  }
`;
export const CardStudent = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  align-items: center;
  background: ${COLORS.white_dark};
  border: 5px solid ${COLORS.white_100};
  border-radius: 13px;
  height: 300px;
  gap: 20px;
  padding: 30px;

  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 60px;
    gap: 0;
  }
`;

export const StudentComent = styled.div`
  display: flex;
  padding: 10px;
  color: ${COLORS.black_light};
  flex-direction: column;
  font-size: 0.9rem;
  gap: 10px;
  justify-content: space-around;
  padding-right: 20px;
  width: 60%;

  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 769px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 10px;
  }
`;

export const StudentAssessment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  h4 {
    font-family: "Montserrat", cursive;
    font-weight: 600;
    font-size: 16px;
  }
  img {
    width: 13px;
  }
`;
