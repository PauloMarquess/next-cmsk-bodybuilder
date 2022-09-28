/* eslint-disable @next/next/no-page-custom-font */
import {
  ChangeLanguage,
  Logo,
  SocialMedia,
  NavigationDesktop,
  NavigationMobile,
} from "../../../components";

import { CardHeader, CardLogo, InvisibleMobile } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <CardLogo href="#home">
        <Logo />
        <h1>BodyBuilding</h1>
      </CardLogo>
      <NavigationMobile />
      <NavigationDesktop />
      <SocialMedia />
      <InvisibleMobile>
        <ChangeLanguage />
      </InvisibleMobile>
    </CardHeader>
  );
};

export default Header;
