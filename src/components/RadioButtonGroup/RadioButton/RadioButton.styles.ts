import styled, { css } from "styled-components";
import {
    RadioButtonVariant,
    IStyledRadioButton,
    RadioButtonVariantEnum,
} from "./RadioButton.types";
import { ColorsEnum } from "../../../types/global/colors";

const variantStyles = (
    variant: RadioButtonVariant = RadioButtonVariantEnum.primary
) =>
    ({
        primary: css``,
    }[variant]);

const StyledRadioButton = styled.div<IStyledRadioButton>`
    margin: 10px 0px;

    input {
        accent-color: ${ColorsEnum.gray_03};
        margin-right: 15px;

        &:hover {
            cursor: pointer;
        }
    }

    ${({ variant }) => variantStyles(variant)}
`;

export default StyledRadioButton;
