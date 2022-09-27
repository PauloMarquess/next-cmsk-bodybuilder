import { ReactNode } from "react";
import { CardButton } from "./style";

interface ButtonLinkProps {
  children: ReactNode;
  link: string;
  borderRadius?: string;
  boxShadow?: boolean;
  target?: string;
}

const ButtonLink = ({
  children,
  link,
  borderRadius,
  boxShadow,
  target,
}: ButtonLinkProps) => {
  return (
    <CardButton
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      href={link}
      target={target}
    >
      {children}
    </CardButton>
  );
};

export default ButtonLink;
