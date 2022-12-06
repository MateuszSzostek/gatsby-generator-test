import styled, { css } from "styled-components";

const StyledLayout = styled.main<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          background-color: white;
        `}
`;

export default StyledLayout;
