import Image from "next/future/image";
import { useState } from "react";
import { icons } from "../../../assets";
import { ModalMenu } from "../../../components";
import { CardMobile, IconCard } from "./style";

const NavigationMobile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <CardMobile>
      <IconCard onClick={handleModal}>
        <Image
          className="social-media"
          src={icons.menu}
          alt="imagem das redes sociais"
          width={50}
        />
      </IconCard>
      {modalVisible && (
        <ModalMenu
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </CardMobile>
  );
};

export default NavigationMobile;
