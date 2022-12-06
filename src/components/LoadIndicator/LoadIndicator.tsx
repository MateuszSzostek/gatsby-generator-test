import React from "react";
import StyledLoadIndicator from "./LoadIndicator.styles";
import LoadIndicatorIcon from "../../assets/vector/loader.svg";
import SVGIcon from "../SVGIcon/SVGIcon";
import ILoadIndicator from "./LoadIndicator.types";

const LoadIndicator = ({ color }: ILoadIndicator) => {
    return (
        <StyledLoadIndicator>
            <div className="load-indicator__indicator-container">
                <SVGIcon
                    Icon={LoadIndicatorIcon}
                    width="24px"
                    height="24px"
                    currentColor={color}
                />
            </div>
        </StyledLoadIndicator>
    );
};

export default LoadIndicator;
