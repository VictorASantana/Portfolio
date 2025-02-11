import { styled } from 'styled-components';

export const ButtonStyled = styled.button<{color: string, backgroundColor: string}>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color}
`;
