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
      <IconCard src={icons.menu} onClick={handleModal} />
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
