import { LinkButtonStyled } from "./link-button.style";

interface linkButtonProps {
  handleClick: () => void;
  text: string;
  color: string;
  active: boolean;
}

export const LinkButton = (props: linkButtonProps) => {
  return (
    <LinkButtonStyled color={props.color} onClick={props.handleClick} active={props.active}>{props.text}</LinkButtonStyled>
  );
}
