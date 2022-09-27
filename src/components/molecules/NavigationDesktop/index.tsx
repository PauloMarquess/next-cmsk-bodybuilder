import { socialMedia, navigation } from "../../../__mocks__";
import { Media, Navigation } from "./style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/future/image";

const NavigationDesktop = () => {
  return (
    <Navigation>
      {navigation.map((item) => (
        <li key={item.name}>
          <AnchorLink offset={item.desktop} href={item.link}>
            {item.name}
          </AnchorLink>
        </li>
      ))}
      <p>|</p>
      {socialMedia.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Media>
            <Image
              className="media"
              src={item.icons}
              alt={`icone ${item.name}`}
            />
          </Media>
        </a>
      ))}
    </Navigation>
  );
};

export default NavigationDesktop;
