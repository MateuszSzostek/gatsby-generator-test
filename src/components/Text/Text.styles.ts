import styled, { css } from "styled-components";
import { IStyledText } from "./Text.types";

const StyledText = styled.p<IStyledText>`
  position: relative;
  z-index: 2000;
  color: ${({ color }) => (color ? color : "black")};
`;

export default StyledText;
