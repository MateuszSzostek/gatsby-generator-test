import React from "react";
import Styles from "./SVGIcon.styles";
import IIcon from "./SVGIcon.types";

const { StyledIcon } = Styles;

const SVGIcon = ({ width, height, Icon, currentColor }: IIcon) => {
    return (
        <StyledIcon
            width={width ? width : "16px"}
            height={height ? height : "16px"}
            currentColor={currentColor ? currentColor : "#000000"}
            fill={currentColor ? currentColor : "#000000"}
            stroke={currentColor ? currentColor : "#000000"}
            viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`}
            iconHeight={height}
            iconWidth={width}
        >
            <Icon />
        </StyledIcon>
    );
};

export default SVGIcon;
