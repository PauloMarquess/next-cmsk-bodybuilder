import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StarMaped, ClientsMocks } from "../../../__mocks__";
import { icons } from "../../../assets";
import { i18n } from "../../../translate/i18n.js";

import {
  SectionTestimonial,
  SlideContainer,
  StudentComent,
  StudentAssessment,
  CardStudent,
  CardTestimonial,
  Background,
} from "./style";
import { ImageTestimonial } from "../../atoms/ImageTestimonial";
import Image from "next/future/image";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
  const [perView, setPerView] = useState(1.5);

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 1055) {
      setPerView(1.2);
    }

    if (width < 769) {
      setPerView(1);
    }
  }, [perView]);

  return (
    <SectionTestimonial>
      <CardTestimonial>
        <h1>
          {i18n.t("testimonial.legend")}{" "}
          <span> {i18n.t("testimonial.span")}</span>{" "}
          {i18n.t("testimonial.legendRest")}
        </h1>
      </CardTestimonial>
      <SlideContainer>
        <Background>
          <Image
            width={300}
            height={300}
            src={icons.background}
            alt="imagem background"
          />
        </Background>
        <Swiper
          slidesPerView={perView}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {ClientsMocks.map((i, index) => (
            <SwiperSlide key={index}>
              <CardStudent>
                <ImageTestimonial>
                  <Image src={i.img} alt="perfil do cliente" />
                </ImageTestimonial>

                <StudentComent>
                  <Image src={icons.aspa} alt="imagem das  aspas" />
                  <p>{i.description}</p>
                  <StudentAssessment>
                    <h4>{i.name}</h4>
                    <div>{StarMaped}</div>
                  </StudentAssessment>
                </StudentComent>
              </CardStudent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </SectionTestimonial>
  );
};

export default Testimonial;
