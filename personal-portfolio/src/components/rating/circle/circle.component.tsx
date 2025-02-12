import { CircleStyled } from "./circle.component.style";

interface circleProps {
  selected: boolean;
  color: string;
}

export const Circle = (props: circleProps) => {
  return (
    <CircleStyled selected={props.selected} color={props.color} />
  );
}
