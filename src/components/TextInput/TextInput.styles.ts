import styled, { css } from "styled-components";
import { ColorsEnum } from "../../types/global/colors";
import { FontSizeEnum, FontWeightEnum } from "../../types/global/fonts";
import {
    TextInputVariant,
    IStyledTextInput,
    TextInputVariantEnum,
} from "./TextInput.types";

const variantStyles = (
    variant: TextInputVariant = TextInputVariantEnum.primary
) =>
    ({
        primary: css``,
    }[variant]);

const StyledTextInput = styled.div<IStyledTextInput>`
    ${({ variant }) => variantStyles(variant)}

    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    position: relative;
    //margin: 20px 0px;
    width: 100%;

    label {
        font-size: ${FontSizeEnum._12px};
    }

    input {
        border: none;
        border-bottom: 1px solid ${ColorsEnum.gray_00};
        padding: 15px 0px;
        outline: none;
        max-width: 100%;

        ${({ RightIcon }) =>
            RightIcon &&
            css`
                padding-right: 50px;
            `}

        ${({ LeftIcon }) =>
            LeftIcon &&
            css`
                padding-left: 50px;
            `}

        font-size: ${FontSizeEnum._16px};
        margin: 8px 0px;
    }

    .text-input__ {
        &icons-container {
            position: relative;
        }

        &title {
            color: ${ColorsEnum.gray_00};
        }

        &error {
            color: ${ColorsEnum.red_00};
        }

        &left-icon {
            position: absolute;
            width: 100%;

            svg {
                position: absolute;
                left: 15px;
                top: 15px;
            }
        }

        &right-icon {
            position: absolute;
            width: 100%;

            svg {
                position: absolute;
                right: 15px;
                top: 15px;
            }
        }

        &clear-button {
            position: absolute;
            width: 100%;

            svg {
                position: absolute;
                right: 15px;
                top: 15px;
            }

            &:hover {
                cursor: pointer;
            }
        }

        &autocomplete-container {
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            max-height: 400px;
            background-color: ${ColorsEnum.gray_09};
            z-index: 50;
            overflow-y: scroll;
            box-shadow: 31.8895px 35.8756px 80px rgba(119, 119, 119, 0.07),
                20.6691px 23.2527px 46.8519px rgba(119, 119, 119, 0.0531481),
                12.2833px 13.8188px 25.4815px rgba(119, 119, 119, 0.0425185),
                6.37789px 7.17513px 13px rgba(119, 119, 119, 0.035),
                2.5984px 2.9232px 6.51852px rgba(119, 119, 119, 0.0274815),
                0.590546px 0.664364px 3.14815px rgba(119, 119, 119, 0.0168519);
        }

        &autocomplete-option {
            padding: 10px;
            font-size: ${FontSizeEnum._16px};
            font-weight: ${FontWeightEnum._400};

            &:hover {
                background-color: ${ColorsEnum.gray_04transparent};
                cursor: pointer;
            }
        }
    }
`;

export default StyledTextInput;
