import styled, { css } from "styled-components";
import { ColorsEnum } from "../../types/global/colors";
import {
    ModuleVariant,
    IStyledModule,
    ModuleVariantEnum,
} from "./Module.types";

const variantStyles = (variant: ModuleVariant = ModuleVariantEnum.primary) =>
    ({
        primary: css``,
        bottomMargin: css`
            margin-bottom: 50px;
        `,
        darkFooter: css`
            background-color: ${ColorsEnum.gray_00};
            position: absolute;
            bottom: 0;
        `,
    }[variant]);

const StyledModule = styled.section<IStyledModule>`
    width: 100%;
    display: flex;
    justify-content: center;

    .module__ {
        &container {
            width: 1440px;
        }

        &wrapper {
            width: calc(100% - 30px);
            margin-left: 15px;
            margin-right: 15px;
        }
    }

    @media only screen and (max-width: 1440px) {
        width: 100%;

        .module__ {
            &container {
                width: 100%;
            }
        }
    }

    ${({ variant }) => variantStyles(variant)}
`;

export default StyledModule;
