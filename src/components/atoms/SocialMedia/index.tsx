import Image from "next/image";
import { socialMedia } from "../../../__mocks__";
import { Navigation } from "./style";

const SocialMedia = () => {
  return (
    <Navigation>
      {socialMedia.map((item) => (
        <a href={item.link} key={item.name}>
          <Image src={item.icons} alt={`icone ${item.name}`} />
        </a>
      ))}
    </Navigation>
  );
};

export default SocialMedia;
