import Lottie from "react-lottie";
import Animation from "../../../assets/animation/animation-whatsapp.json";
import { CardWhatsapp } from "./style";
import { i18n } from "../../../translate/i18n.js";

const Chat = () => {
  return (
    <CardWhatsapp href={i18n.t("whatsapp.message")} target="_blank">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width="100%"
      />
    </CardWhatsapp>
  );
};

export default Chat;
