import { icons } from "../assets";
import { i18n } from "../translate/i18n.js";
import { images } from "../assets";

export const navigation = [
  {
    name: `${i18n.t("navigation.home")}`,
    link: "#home",
  },
  {
    name: `${i18n.t("navigation.mission")}`,
    link: "#mission",
    desktop: 100,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.team")}`,
    link: "#team",
    desktop: 100,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.plan")}`,
    link: "#plans",
    desktop: 90,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.contact")}`,
    link: "#contact",
    mobile: 100,
  },
];

export const objective = [
  { name: `${i18n.t("mission.objective.one")}` },
  { name: `${i18n.t("mission.objective.two")}` },
  { name: `${i18n.t("mission.objective.three")}` },
  { name: `${i18n.t("mission.objective.four")}` },
  { name: `${i18n.t("mission.objective.five")}` },
];

export const team = [
  {
    id: `${i18n.t("team.teacher.one.id")}`,
    name: `${i18n.t("team.teacher.one.name")}`,
    functionTeacher: `${i18n.t("team.teacher.one.functionTeacher")}`,
    image: images.charles,
    perfil: images.charlesPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.one.specialties.one")}` },
      { name: `${i18n.t("team.teacher.one.specialties.two")}` },
      { name: `${i18n.t("team.teacher.one.specialties.third")}` },
      { name: `${i18n.t("team.teacher.one.specialties.four")}` },
      { name: `${i18n.t("team.teacher.one.specialties.five")}` },
      { name: `${i18n.t("team.teacher.one.specialties.six")}` },
      { name: `${i18n.t("team.teacher.one.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.one.specialties.eight")}` },
      { name: `${i18n.t("team.teacher.one.specialties.nine")}` },
    ],
  },
  {
    id: `${i18n.t("team.teacher.two.id")}`,
    name: `${i18n.t("team.teacher.two.name")}`,
    functionTeacher: `${i18n.t("team.teacher.two.functionTeacher")}`,
    image: images.harley,
    perfil: images.harleyPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.two.specialties.one")}` },
      { name: `${i18n.t("team.teacher.two.specialties.two")}` },
      { name: `${i18n.t("team.teacher.two.specialties.third")}` },
      { name: `${i18n.t("team.teacher.two.specialties.four")}` },
      { name: `${i18n.t("team.teacher.two.specialties.five")}` },
      { name: `${i18n.t("team.teacher.two.specialties.six")}` },
      { name: `${i18n.t("team.teacher.two.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.two.specialties.eight")}` },
    ],
  },

  {
    id: `${i18n.t("team.teacher.third.id")}`,
    name: `${i18n.t("team.teacher.third.name")}`,
    functionTeacher: `${i18n.t("team.teacher.third.functionTeacher")}`,
    image: images.vinicius,
    perfil: images.viniciusPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.third.specialties.one")}` },
      { name: `${i18n.t("team.teacher.third.specialties.two")}` },
      { name: `${i18n.t("team.teacher.third.specialties.third")}` },
      { name: `${i18n.t("team.teacher.third.specialties.four")}` },
      { name: `${i18n.t("team.teacher.third.specialties.five")}` },
      { name: `${i18n.t("team.teacher.third.specialties.six")}` },
      { name: `${i18n.t("team.teacher.third.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.third.specialties.eight")}` },
      { name: `${i18n.t("team.teacher.four.specialties.nine")}` },
    ],
  },
  {
    id: `${i18n.t("team.teacher.seven.id")}`,
    name: `${i18n.t("team.teacher.seven.name")}`,
    functionTeacher: `${i18n.t("team.teacher.seven.functionTeacher")}`,
    image: images.anderson,
    perfil: images.andersonPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.seven.specialties.one")}` },
      { name: `${i18n.t("team.teacher.seven.specialties.two")}` },
      { name: `${i18n.t("team.teacher.seven.specialties.third")}` },
      { name: `${i18n.t("team.teacher.seven.specialties.four")}` },
      { name: `${i18n.t("team.teacher.seven.specialties.five")}` },
    ],
  },
  {
    id: `${i18n.t("team.teacher.four.id")}`,
    name: `${i18n.t("team.teacher.four.name")}`,
    functionTeacher: `${i18n.t("team.teacher.four.functionTeacher")}`,
    image: images.monica,
    perfil: images.monicaPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.four.specialties.one")}` },
      { name: `${i18n.t("team.teacher.four.specialties.two")}` },
      { name: `${i18n.t("team.teacher.four.specialties.third")}` },
      { name: `${i18n.t("team.teacher.four.specialties.four")}` },
      { name: `${i18n.t("team.teacher.four.specialties.five")}` },
      { name: `${i18n.t("team.teacher.four.specialties.six")}` },
      { name: `${i18n.t("team.teacher.four.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.four.specialties.eight")}` },
      { name: `${i18n.t("team.teacher.four.specialties.nine")}` },
      { name: `${i18n.t("team.teacher.four.specialties.ten")}` },
    ],
  },
  {
    id: `${i18n.t("team.teacher.five.id")}`,
    name: `${i18n.t("team.teacher.five.name")}`,
    functionTeacher: `${i18n.t("team.teacher.five.functionTeacher")}`,
    image: images.janaina,
    perfil: images.janainaPerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.five.specialties.one")}` },
      { name: `${i18n.t("team.teacher.five.specialties.two")}` },
      { name: `${i18n.t("team.teacher.five.specialties.third")}` },
      { name: `${i18n.t("team.teacher.five.specialties.four")}` },
      { name: `${i18n.t("team.teacher.five.specialties.five")}` },
      { name: `${i18n.t("team.teacher.five.specialties.six")}` },
      { name: `${i18n.t("team.teacher.five.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.five.specialties.eight")}` },
    ],
  },

  {
    id: `${i18n.t("team.teacher.six.id")}`,
    name: `${i18n.t("team.teacher.six.name")}`,
    functionTeacher: `${i18n.t("team.teacher.six.functionTeacher")}`,
    image: images.aline,
    perfil: images.alinePerfil,
    specialties: [
      { name: `${i18n.t("team.teacher.six.specialties.one")}` },
      { name: `${i18n.t("team.teacher.six.specialties.two")}` },
      { name: `${i18n.t("team.teacher.six.specialties.third")}` },
      { name: `${i18n.t("team.teacher.six.specialties.four")}` },
      { name: `${i18n.t("team.teacher.six.specialties.five")}` },
      { name: `${i18n.t("team.teacher.six.specialties.six")}` },
      { name: `${i18n.t("team.teacher.six.specialties.seven")}` },
      { name: `${i18n.t("team.teacher.six.specialties.eight")}` },
    ],
  },
];

export const plans = [
  {
    legend: `${i18n.t("plans.basic.legend")}`,
    price: `${i18n.t("plans.basic.price")}`,
    month: `${i18n.t("plans.basic.month")}`,
    subtitle: `${i18n.t("plans.basic.subtitle")}`,
    link: `${i18n.t(`plans.basic.message`)}`,
    benefits: [
      { name: `${i18n.t("plans.realTime")}` },
      { name: `${i18n.t("plans.basic.benefits.one")}` },
      { name: `${i18n.t("plans.basic.benefits.two")}` },
      { name: `${i18n.t("plans.basic.benefits.three")}` },
      { name: `${i18n.t("plans.basic.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.silver.legend")}`,
    price: `${i18n.t("plans.silver.price")}`,
    month: `${i18n.t("plans.silver.month")}`,
    subtitle: `${i18n.t("plans.silver.subtitle")}`,
    destak: true,
    link: `${i18n.t(`plans.silver.message`)}`,
    benefits: [
      { name: `${i18n.t("plans.realTime")}` },
      { name: `${i18n.t("plans.silver.benefits.one")}` },
      { name: `${i18n.t("plans.silver.benefits.two")}` },
      { name: `${i18n.t("plans.silver.benefits.three")}` },
      { name: `${i18n.t("plans.silver.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.gold.legend")}`,
    price: `${i18n.t("plans.gold.price")}`,
    month: `${i18n.t("plans.gold.month")}`,
    subtitle: `${i18n.t("plans.gold.subtitle")}`,
    link: `${i18n.t(`plans.gold.message`)}`,
    benefits: [
      { name: `${i18n.t("plans.realTime")}` },
      { name: `${i18n.t("plans.gold.benefits.one")}` },
      { name: `${i18n.t("plans.gold.benefits.two")}` },
      { name: `${i18n.t("plans.gold.benefits.three")}` },
      { name: `${i18n.t("plans.gold.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.group.legend")}`,
    price: `${i18n.t("plans.group.price")}`,
    month: `${i18n.t("plans.group.month")}`,
    subtitle: `${i18n.t("plans.group.subtitle")}`,
    destak: true,
    link: `${i18n.t(`plans.group.message`)}`,
    benefits: [
      { name: `${i18n.t("plans.realTime")}` },
      { name: `${i18n.t("plans.couple.benefits.one")}` },
      { name: `${i18n.t("plans.couple.benefits.two")}` },
      { name: `${i18n.t("plans.couple.benefits.three")}` },
      { name: `${i18n.t("plans.couple.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.couple.legend")}`,
    price: `${i18n.t("plans.couple.price")}`,
    month: `${i18n.t("plans.couple.month")}`,
    subtitle: `${i18n.t("plans.couple.subtitle")}`,
    link: `${i18n.t(`plans.couple.message`)}`,
    benefits: [
      { name: `${i18n.t("plans.realTime")}` },
      { name: `${i18n.t("plans.couple.benefits.one")}` },
      { name: `${i18n.t("plans.couple.benefits.two")}` },
      { name: `${i18n.t("plans.couple.benefits.three")}` },
      { name: `${i18n.t("plans.couple.benefits.four")}` },
    ],
  },
];

export const socialMedia = [
  {
    name: "facebook",
    icons: icons.facebook,
    link: "https://www.facebook.com/profile.php?id=100005026590992",
  },
  {
    name: "instagram",
    icons: icons.instagram,
    link: "https://www.instagram.com/cmsk_bodybuilding_fitness/",
  },
];

export const contact = [
  {
    icon: icons.telephone,
    title: "+4407465748962",
    subTitle: `${i18n.t("footer.contacts.phoneLegend")}`,
    href: "tel:4407465748962",
  },
  {
    icon: icons.email,
    title: "E-mail",
    subTitle: `${i18n.t("footer.contacts.emailLegend")}`,
    href: "mailto:consultoriacms@yahoo.com.br",
  },
];
export const openingHours = [
  {
    day: `${i18n.t("footer.openingHours.week.one")}`,
    hour: "- - - - - - - - -  -",
  },
  {
    day: `${i18n.t("footer.openingHours.week.two")}`,
    hour: "07:00-20:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.three")}`,
    hour: "07:00-20:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.four")}`,
    hour: "07:00-20:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.five")}`,
    hour: "07:00-20:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.six")}`,
    hour: "07:00-20:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.seven")}`,
    hour: "08:00-12:00",
  },
];
export const StarMaped = [1, 2, 3, 4, 5].map(() => (
  <img src={icons.Star} alt="star" />
));

export const ClientsMocks = [
  {
    name: "Jessica",
    img: images.jessicaTestimonial,
    description: `${i18n.t("testimonial.students.first.message")}`,
  },
  {
    name: "Amárilis Porto ",
    img: images.marlesTestimonial,
    description: `${i18n.t("testimonial.students.second.message")}`,
  },
  {
    name: "Francine Rocha",
    img: images.francineTestimonial,
    description: `${i18n.t("testimonial.students.third.message")}`,
  },
  {
    name: "Monique",
    img: images.moniqueTestimonial,
    description: `${i18n.t("testimonial.students.four.message")}`,
  },
  {
    name: "Elaine Ranzatto",
    img: images.elaineTestimonial,
    description: `${i18n.t("testimonial.students.five.message")}`,
  },
  {
    name: "Vanessa",
    img: images.vanessaTestimonial,
    description: `${i18n.t("testimonial.students.six.message")}`,
  },
];
