import { Container, Modal } from "../..";
import { team } from "../../../__mocks__";
import { i18n } from "../../../translate/i18n.js";
import {
  CardTeacher,
  Teacher,
  Divider,
  Legend,
  Details,
  ButtonModal,
} from "./style";
import { useState } from "react";
import Image from "next/future/image";

const Team = ({ setOverflow }: any) => {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});

  const handleModal = (item: any) => {
    setModal(!modal);
    {
      modal ? setOverflow("visible") : setOverflow("hidden");
    }
    setDetails(item);
  };

  return (
    <Container
      responsive
      backgroundParallax
      id="team"
      column
      justify="flex-start"
      height="auto"
      padding="20px 0 40px 0"
    >
      <Legend>
        <h1>{`${i18n.t("team.title")}`} </h1>
        <Divider />
      </Legend>
      <CardTeacher>
        {modal && (
          <Modal handleModal={handleModal} details={details} modal={modal} />
        )}
        {team.map((item) => (
          <Teacher key={item.name}>
            <Image id={item.id} src={item.image} alt="foto do professor " />
            <Details>
              <h1>{item.name}</h1>
              <p>{item.functionTeacher}</p>

              <ButtonModal
                onClick={() => {
                  handleModal(item);
                }}
              >
                {`${i18n.t("team.specialties")}`}
              </ButtonModal>
            </Details>
          </Teacher>
        ))}
      </CardTeacher>
    </Container>
  );
};

export default Team;
