import styled from "styled-components";
import { ColorsEnum } from "../../types/global/colors";
import BreakPointsEnum from "../../types/global/global";

const StyledNavigation = styled.nav`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigation__ {
        &logo-container {
        }

        &options-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &search-box {
            width: 300px;
        }

        &mobile-search-box-option {
            display: none;
        }

        &bag-button-container {
            position: relative;
        }

        &bag-quantity-wrapper {
            position: absolute;
            background-color: ${ColorsEnum.red_00};
            border-radius: 10px;
            width: 14px;
            height: 14px;
            top: 20px;
            left: 10px;

            > p {
                margin: 4px 0 0 0;
                text-align: center;
            }
        }
    }

    @media only screen and (max-width: ${BreakPointsEnum._mobile}) {
        .navigation__ {
            &search-box {
                display: none;
            }
            &mobile-search-box-option {
                display: block;
            }
        }
    }
`;

export default StyledNavigation;
