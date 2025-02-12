import { Circle } from "./circle/circle.component";
import { RatingContainer } from "./rating.component.style";

interface ratingProps {
  score: number;
  color: string;
}

export const Rating = (props: ratingProps) => {
  return (
    <RatingContainer>
      {[1, 2, 3, 4, 5].map((index) => (
        <Circle key={index} selected={index <= props.score} color={props.color} />
      ))}
    </RatingContainer>
  );
}