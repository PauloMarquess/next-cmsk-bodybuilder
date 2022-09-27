import { images, icons } from "../../../assets";
import { Container } from "../../../components";
import { CardMission, ImageMission, ListObjtive } from "./style";
import { i18n } from "../../../translate/i18n.js";
import { objective } from "../../../__mocks__";

const Mission = () => {
  return (
    <Container responsive id="mission">
      <CardMission>
        <h1>
          {i18n.t("mission.title")} <span> {i18n.t("mission.titleSpan")}</span>
        </h1>
        <h3>
          <span> | </span> {i18n.t("mission.subtitle")}
        </h3>
        <p>
          {i18n.t("mission.description")}
          {i18n.t("mission.descriptionRestInit")}
          <strong>{i18n.t("mission.descriptionSpan")}</strong>
          {i18n.t("mission.descriptionRest")}
        </p>
        <ListObjtive>
          {objective.map((obj) => (
            <li key={obj.name}>
              <img src={icons.verify} />
              {obj.name}
            </li>
          ))}
        </ListObjtive>
      </CardMission>
      <ImageMission>
        <img src={images.mission} alt="foto Charles Mario e Monika" />
      </ImageMission>
    </Container>
  );
};

export default Mission;
