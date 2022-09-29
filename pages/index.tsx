import Head from "next/head";
import { useState } from "react";
import {
  Chat,
  Copyright,
  Footer,
  Header,
  Mission,
  Plans,
  Presentation,
  Team,
  Testimonial,
} from "../src/components";
import { GlobalStyle } from "../styles";

const Home = () => {
  const [overflow, setOverflow] = useState("");

  return (
    <>
      <>
        <Head>
          <title>CMSK Bodybuilding Fitness</title>
          <link rel="icon" type="image/svg+xml" href="/cmsk.png" />
          <link
            ref={`https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@500;600&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap`}
          />
          <meta
            name="keywords"
            content="cmsk,bodybuilding,saude,musculacao,fisico,condicionamento,forma,poder,corpo,musculo,online,personal,trainer,traine,treino,resultado,nutricao,nutricionista,modelagem,perder,peso,hipertrofia,muscular,aumento,condicionamento,ganho,massa,magra,bariatrica,preparador,atleta,atletas,arnold,fisiculturismo,fisiculturista,charles,mario,monica"
          />
          <meta name="author" content="Charles Mario" />
          <meta
            name="description"
            content="Usar o conhecimento do bodybuilding para transformação dos físicos, pautado em estratégias e planejamentos completos, uma arte em esculpir corpos, de acordo com os objetivos de cada um, desde de emagrecimento, tônus, ganho de massa muscular, modelagem etc."
          />
          <meta name="title" content="CMSK Bodybuilding Fitness" />
        </Head>
        <Header />
        <Presentation />
        <Mission />
        <Team setOverflow={setOverflow} />
        <Plans />
        <Testimonial />
        <Footer />
        <Chat />
        <Copyright />
        <GlobalStyle overflow={overflow} />
      </>
    </>
  );
};

export default Home;
