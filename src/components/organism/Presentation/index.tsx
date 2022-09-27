import { images } from "../../../assets";
import { Container, ButtonAnimation } from "../../../components";
import { Images, Information } from "./style";
import { i18n } from "../../../translate/i18n.js";

const Presentation = () => {
  return (
    <Container backgroundColor height="140vh" id="home">
      <Images src={images.presentation} />
      <Information>
        <h2>{i18n.t("presentation.title")}</h2>
        <h1>{i18n.t("presentation.subtitle")}</h1>
        <h6>{i18n.t("presentation.description")}</h6>

        <ButtonAnimation children={i18n.t("presentation.button")} />
      </Information>
    </Container>
  );
};

export default Presentation;
