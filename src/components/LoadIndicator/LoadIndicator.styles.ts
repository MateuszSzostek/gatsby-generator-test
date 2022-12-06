import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotateZ(0deg) ;
    }
    100%{
        transform: rotateZ(360deg) ;
    }
`;

const StyledLoadIndicator = styled.div`
    position: relative;

    .load-indicator__indicator-container {
        height: 12px;
        position: absolute;
        left: 0;
        top: -5px;
        > svg {
            animation: ${rotate} 0.5s infinite;
        }
    }
`;

export default StyledLoadIndicator;
