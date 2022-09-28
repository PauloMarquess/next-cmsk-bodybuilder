/* eslint-disable react/no-children-prop */
import { images } from "../../../assets";
import { Container, ButtonAnimation } from "../../../components";
import { CardImages, Information } from "./style";
import { i18n } from "../../../translate/i18n.js";
import Image from "next/future/image";

const Presentation = () => {
  return (
    <Container backgroundColor height="140vh" id="home">
      <CardImages>
        <Image
          id="imagem-presentation"
          src={images.presentation}
          alt="imagem de apresentação"
        />
      </CardImages>
      <Information>
        <h1>{`${i18n.t("presentation.title")}`}</h1>
        <h2>{`${i18n.t("presentation.subtitle")}`}</h2>
        <h6>{`${i18n.t("presentation.description")}`}</h6>

        <ButtonAnimation children={i18n.t("presentation.button")} />
      </Information>
    </Container>
  );
};

export default Presentation;
