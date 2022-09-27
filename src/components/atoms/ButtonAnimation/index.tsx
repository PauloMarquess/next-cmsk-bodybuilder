import { ReactNode } from "react";
import { ButtonAnimations } from "./style";
import { i18n } from "../../../translate/i18n.js";

interface ButtonAnimationProps {
  children: ReactNode;
}

const ButtonAnimation = ({ children }: ButtonAnimationProps) => {
  return (
    <ButtonAnimations
      href={i18n.t("whatsapp.messageFreeClass")}
      target="_blank"
    >
      {" "}
      {children}
    </ButtonAnimations>
  );
};

export default ButtonAnimation;
