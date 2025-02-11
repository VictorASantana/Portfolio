import { ButtonStyled } from "./button.style";

interface buttonProps {
  text: string;
  backgroundColor: string;
  color: string;
  handleClick: () => void;
}


export const Button = (props: buttonProps) => {
  return (
    <ButtonStyled onClick={props.handleClick} backgroundColor={props.backgroundColor} color={props.color}>
      {props.text}
    </ButtonStyled>
  );
}