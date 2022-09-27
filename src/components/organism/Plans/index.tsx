import { icons, images } from "../../../assets";
import { Container, ButtonLink } from "../../../components";
import { plans } from "../../../__mocks__";
import { i18n } from "../../../translate/i18n.js";
import {
  CardPlan,
  CardPlans,
  Cifrao,
  CrownAbsolute,
  Divider,
  LegensPlan,
  ListBenefit,
  Price,
} from "./style";
import Image from "next/future/image";

const Plans = () => {
  return (
    <Container
      width="85%"
      margin="0 auto"
      id="plans"
      height="auto"
      column
      responsive
    >
      <LegensPlan>
        {i18n.t("plans.title")} <span>{`${i18n.t("plans.titleSpan")}`}</span>{" "}
      </LegensPlan>
      <CardPlans>
        {plans.map((plan, i) => (
          <CardPlan key={i}>
            {plan.destak && (
              <CrownAbsolute>
                <Image
                  width={70}
                  height={35}
                  src={images.crown}
                  alt="imagem da coroa"
                />
              </CrownAbsolute>
            )}
            <h3>{plan.legend}</h3>
            <p>
              <Cifrao> {i18n.t("plans.coin")}</Cifrao>{" "}
              <Price>{plan.price} </Price> /{plan.month}
            </p>
            <Divider />

            <h3>{`${i18n.t("plans.benefitsPlans")}`}</h3>
            <h6>{plan.legend}</h6>
            <ListBenefit>
              {plan.benefits.map((benefit, index) => (
                <li key={index}>
                  <span>
                    <Image width={15} src={icons.arrow} alt="imagem icone" />
                  </span>
                  {benefit.name}
                </li>
              ))}
            </ListBenefit>
            <ButtonLink
              boxShadow
              borderRadius="10px"
              link={plan.link}
              target="_blank"
            >
              {`${i18n.t("plans.button")}`}
            </ButtonLink>
          </CardPlan>
        ))}
      </CardPlans>
    </Container>
  );
};

export default Plans;
