import { useEffect } from "react";
import { icons } from "../../../assets";

import {
  ButtonClose,
  CardDetails,
  CardModal,
  ContainerModal,
  List,
  LogoImage,
} from "./style";

const Modal = ({ id = "modal", handleModal, details, modal }: any) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      handleModal();
    }
  };
  const { name, perfil, specialties } = details;
  const element: any = document.getElementById("main");

  useEffect(() => {
    modal && (element.style.overflow = "hidden");
  }, []);
  return (
    <ContainerModal onClick={handleOutsideClick} id={id}>
      <CardModal>
        <ButtonClose onClick={handleModal}>x</ButtonClose>
        <CardDetails>
          <LogoImage src={perfil} alt="" />
          <h1>{name}</h1>
          <List>
            {specialties?.map((specialtie: any) => (
              <li>
                <img src={icons.verify} alt="icone verificado" />
                {specialtie.name}
              </li>
            ))}
          </List>
        </CardDetails>
      </CardModal>
    </ContainerModal>
  );
};

export default Modal;
