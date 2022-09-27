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
      <h6>{i.day}</h6>
      <h6>{i.hour}</h6>
    </EachHours>
  );
};

export default EachHour;
