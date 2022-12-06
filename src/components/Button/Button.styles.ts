import styled, { css } from "styled-components";
import { ColorsEnum } from "../../types/global/colors";
import { FontSizeEnum } from "../../types/global/fonts";
import { ButtonVariant, StyledButton, ButtonVariantEnum } from "./Button.types";

const variantStyles = (variant: ButtonVariant = ButtonVariantEnum.primary) =>
    ({
        primary: css`
            color: ${ColorsEnum.gray_10};
            background-color: ${ColorsEnum.gray_00};
            border: ${ColorsEnum.gray_00} 1px solid;
            &:hover {
                background-color: ${ColorsEnum.gray_05};
            }

            &:focus {
                background-color: ${ColorsEnum.gray_03};
            }
        `,
        primaryFullSize: css`
            color: ${ColorsEnum.gray_10};
            background-color: ${ColorsEnum.gray_00};
            border: ${ColorsEnum.gray_00} 1px solid;
            &:hover {
                background-color: ${ColorsEnum.gray_05};
            }

            &:focus {
                background-color: ${ColorsEnum.gray_03};
            }
            width: 100%;
        `,
        outlined: css`
            color: ${ColorsEnum.gray_00};
            background-color: ${ColorsEnum.gray_10};
            border: ${ColorsEnum.gray_00} 1px solid;
            &:hover {
                color: ${ColorsEnum.gray_10};
                background-color: ${ColorsEnum.gray_05};
            }

            &:focus {
                background-color: ${ColorsEnum.gray_03};
            }
        `,
        simple: css`
            color: ${ColorsEnum.gray_00};
            background-color: ${ColorsEnum.gray_10};
            padding: 10px;
        `,
        iconButton: css`
            background-color: transparent;
            border: none;
            padding: 0;
        `,
        redIconButton: css`
            color: ${ColorsEnum.red_00};
            background-color: transparent;
            border: none;
            padding: 0;
        `,
    }[variant]);

const Styles = {
    StyledButton: styled.button<StyledButton>`
        display: inline-block;
        border-radius: 2px;
        font-size: ${FontSizeEnum._16px};
        font-weight: bold;
        padding: 15px 30px;
        border: none;
        transition: 0.2s;
        width: fit-content;
        height: fit-content;
        white-space: nowrap;

        &:hover {
            cursor: pointer;
        }

        & svg {
            padding-left: 5px;
            padding-right: 5px;
        }

        ${({ variant }) => variantStyles(variant)}

        ${({ disabled }) =>
            disabled === true &&
            css`
                background-color: lightgrey;
                border-color: lightgrey;
            `}
    `,
};

export { Styles };
