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

const Home = () => {
  return (
    <div id="main">
      <Header />
      <Presentation />
      <Mission />
      <Team />
      <Plans />
      <Testimonial />
      <Footer />
      <Chat />
      <Copyright />
    </div>
  );
};

export default Home;
