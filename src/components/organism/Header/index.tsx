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
        <meta
          name="keywords"
          content="cmsk,bodybuilding,saude,musculacao,fisico,condicionamento,forma,poder,corpo,musculo,online,personal,trainer,traine,treino,resultado,nutricao,nutricionista,modelagem,perder,peso,hipertrofia,muscular,aumento,condicionamento,ganho,massa,magra,bariatrica,preparador,atleta,atletas,arnold,fisiculturismo,fisiculturista,charles,mario,monica"
        />
        <meta name="author" content="Charles Mario" />
        <meta
          name="description"
          content="Usar o conhecimento do bodybuilding para transformação dos físicos, pautado em estratégias e planejamentos completos, uma arte em esculpir corpos, de acordo com os objetivos de cada um, desde de emagrecimento, tônus, ganho de massa muscular, modelagem etc."
        />
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
