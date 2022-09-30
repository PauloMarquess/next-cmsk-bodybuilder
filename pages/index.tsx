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
import MetaTags from "../src/components/molecules/MetaTags";
import { GlobalStyle } from "../styles";

const Home = () => {
  const [overflow, setOverflow] = useState("");

  return (
    <>
      <>
        <MetaTags />
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
