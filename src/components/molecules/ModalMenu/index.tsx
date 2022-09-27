import { icons } from "../../../assets";
import { navigation } from "../../../__mocks__";
import { ChangeLanguage } from "../../../components";
import { Header, ModalCard } from "./style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/future/image";

const ModalMenu = ({ setModalVisible, modalVisible }: any) => {
  const exitModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <ModalCard>
      <Header onClick={exitModal}>
        <ChangeLanguage />
        <Image width={20} src={icons.close} alt="imagem de X" />
      </Header>
      <nav onClick={exitModal}>
        {navigation.map((nav) => (
          <AnchorLink offset={nav.mobile} key={nav.name} href={nav.link}>
            {nav.name}
          </AnchorLink>
        ))}
      </nav>
    </ModalCard>
  );
};

export default ModalMenu;
