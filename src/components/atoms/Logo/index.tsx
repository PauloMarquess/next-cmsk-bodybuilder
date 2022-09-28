import Image from "next/future/image";
import { images } from "../../../assets";
import { ImageLogo } from "./style";

const Logo = () => {
  return (
    <ImageLogo>
      <Image
        className="logo"
        src={images.logo}
        alt="Imagem cmsk bodybuilding"
      />
    </ImageLogo>
  );
};

export default Logo;
