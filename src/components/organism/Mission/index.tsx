import { images, icons } from "../../../assets";
import { Container } from "../../../components";
import { CardMission, Destak, ImageMission, ListObjtive } from "./style";
import { i18n } from "../../../translate/i18n.js";
import { objective } from "../../../__mocks__";
import Image from "next/future/image";

const Mission = () => {
  return (
    <Container responsive id="mission">
      <CardMission>
        <h1>
          <>
            <span>{`${i18n.t("mission.title")}`}</span>

            <Destak>
              <> {i18n.t("mission.titleSpan")}</>
            </Destak>
          </>
        </h1>
        <>
          <h3>
            <>
              <Destak> | </Destak> {i18n.t("mission.subtitle")}
            </>
          </h3>
        </>

        <p>
          <>
            {i18n.t("mission.description")}
            {i18n.t("mission.descriptionRestInit")}
            <strong>{`${i18n.t("mission.descriptionSpan")}`}</strong>
            {i18n.t("mission.descriptionRest")}
          </>
        </p>
        <ListObjtive>
          {objective.map((obj) => (
            <li key={obj.name}>
              <Image src={icons.verify} alt="imagem verificada" />
              {obj.name}
            </li>
          ))}
        </ListObjtive>
      </CardMission>
      <ImageMission>
        <Image src={images.mission} alt="foto Charles Mario e Monika" />
      </ImageMission>
    </Container>
  );
};

export default Mission;
