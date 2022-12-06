import styled from "styled-components";
import { IStyledIcon } from "./SVGIcon.types";

const Styles = {
    StyledIcon: styled.svg<IStyledIcon>`
        width: ${({ width }) => width};
        height: ${({ height }) => height};
        color: ${({ currentColor }) => currentColor};
        stroke: none;
    `,
};

export default Styles;
