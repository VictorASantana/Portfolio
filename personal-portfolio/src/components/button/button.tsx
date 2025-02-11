import { ButtonStyled } from "./button.style";

interface buttonProps {
  text: string;
  backgroundColor: string;
  color: string;
}


export const Button = (props: buttonProps) => {
  return (
    <ButtonStyled backgroundColor={props.backgroundColor} color={props.color}>
      {props.text}
    </ButtonStyled>
  );
}