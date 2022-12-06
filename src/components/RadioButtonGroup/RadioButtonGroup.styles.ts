import styled, { css } from "styled-components";
import {
    RadioButtonGroupVariant,
    IStyledRadioButtonGroup,
    RadioButtonGroupVariantEnum,
} from "./RadioButtonGroup.types";
import { ColorsEnum } from "../../types/global/colors";

const variantStyles = (
    variant: RadioButtonGroupVariant = RadioButtonGroupVariantEnum.primary
) =>
    ({
        primary: css``,
    }[variant]);

const StyledRadioButtonGroup = styled.fieldset<IStyledRadioButtonGroup>`
    display: flex;
    flex-direction: column;
    border: 0;
    padding-left: 0;
    margin-left: 0;

    legend {
        border-bottom: 2px solid ${ColorsEnum.gray_05};
        width: 100%;
        margin-bottom: 15px;
        padding: 5px 0px;
    }

    ${({ variant }) => variantStyles(variant)}
`;

export default StyledRadioButtonGroup;
