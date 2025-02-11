import styled from "styled-components";

export const LinkButtonStyled = styled.text<{color: string}>`
  color: ${props => props.color};
`;