import { createGlobalStyle } from "styled-components";
import { FontFamilyEnum, FontSizeEnum } from "./src/types/global/fonts";
import { ColorsEnum } from "./src/types/global/colors";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: ${FontFamilyEnum.JosefinSansRegular};
        margin: 0px;
        padding: 0px;
        font-size: 16px;
        font-weight: 500;
        position: relative;
        min-height: 100vh ;
    }
    legend, button {
        font-family:${FontFamilyEnum.JosefinSansBold};
    }

    legend {
        font-size: ${FontSizeEnum._14px} ;
    }

    input {
        font-family: ${FontFamilyEnum.JosefinSansRegular};
    }

    a {
        color: ${ColorsEnum.gray_00};
        text-decoration: none;
    }
`;

export default GlobalStyles;
