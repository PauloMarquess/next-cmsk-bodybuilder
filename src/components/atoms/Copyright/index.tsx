import { CopyrightStyle } from "./style";
import { i18n } from "../../../translate/i18n.js";

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <CopyrightStyle>
      <p>© {year} Cmsk Bodybuilder.</p>
      <p>{i18n.t("copyrightReservation")}.</p>
      <p>
        {i18n.t("development")}
        <a href="https://github.com/PauloMarquess" target="_blank">
          Web Intelligence
        </a>
      </p>
    </CopyrightStyle>
  );
};

export default Copyright;
