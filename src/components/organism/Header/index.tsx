import {
  ChangeLanguage,
  Logo,
  SocialMedia,
  NavigationDesktop,
  NavigationMobile,
} from "../../../components";
import Head from "next/head";

import { CardHeader, CardLogo, InvisibleMobile } from "./style";

const Header = () => {
  return (
    <CardHeader>
      <Head>
        <title>CMSK Bodybuilding</title>
      </Head>
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
