import Image from "next/future/image";
import { icons } from "../../../assets";

import {
  ButtonClose,
  CardDetails,
  CardModal,
  ContainerModal,
  List,
  CardLogoPerfil,
} from "./style";

const Modal = ({ id = "modal", handleModal, details }: any) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      handleModal();
    }
  };
  const { name, perfil, specialties } = details;

  return (
    <ContainerModal onClick={handleOutsideClick} id={id}>
      <CardModal>
        <ButtonClose onClick={handleModal}>x</ButtonClose>
        <CardDetails>
          <CardLogoPerfil>
            <Image
              id="logo-perfil"
              src={perfil}
              alt="foto de perfil `${name}`"
            />
          </CardLogoPerfil>
          <h1>{name}</h1>
          <List>
            {specialties?.map((specialtie: any) => (
              <li key={specialtie.name}>
                <Image width={20} src={icons.verify} alt="icone verificado" />
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
