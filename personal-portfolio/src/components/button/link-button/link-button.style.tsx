import styled from "styled-components";

export const LinkButtonStyled = styled.text<{color: string, active: boolean}>`
  color: ${props => props.color};
  font-weight: bold;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
`;