import { EachHours } from "./style";

interface EachHourProps {
  i?: any;
  index?: number;
}

const EachHour = ({ i, index }: EachHourProps) => {
  const day = new Date().getDay();
  let isDay = false;
  if (index === day) {
    isDay = true;
  }

  return (
    <EachHours isDay={isDay}>
      <p>{i.day}</p>
      <p>{i.hour}</p>
    </EachHours>
  );
};

export default EachHour;
