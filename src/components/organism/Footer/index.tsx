import { i18n } from "../../../translate/i18n.js";
import { contact, openingHours } from "../../../__mocks__";
import { Logo, EachHour } from "../../../components";
import {
  ContainerFooter,
  Contact,
  LogoCard,
  ContactCard,
  OpeningHours,
} from "./style";

const Footer = () => {
  return (
    <ContainerFooter id="contact">
      <LogoCard>
        <Logo />
      </LogoCard>
      <OpeningHours>
        <h2>{i18n.t("footer.openingHours.title")}</h2>
        {openingHours.map((item, index) => (
          <EachHour i={item} index={index} key={index} />
        ))}
      </OpeningHours>
      <ContactCard>
        <h2>{i18n.t("footer.contacts.title")}</h2>
        {contact.map((item, index) => (
          <Contact key={index}>
            <img src={item.icon} alt="icone" />
            <h4>
              <a href={item.href}>{item.title}</a>
            </h4>
            <h5>
              <a href={item.href}>{item.subTitle}</a>
            </h5>
          </Contact>
        ))}
      </ContactCard>
    </ContainerFooter>
  );
};

export default Footer;
