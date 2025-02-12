import styled from "styled-components";
import { Spacing } from "../../../assets/constants/space";

export const CircleStyled = styled.div<{selected: boolean, color: string}>`
  width: ${Spacing.medium}px;
  height: ${Spacing.medium}px;
  border-radius: 50%;
  background-color: ${props => props.selected ? props.color : "transparent"};
  border: 2px solid ${props => props.color};
`;