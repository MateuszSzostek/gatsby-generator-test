import styled from "styled-components";
import BreakPointsEnum from "../../types/global/global";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 50px;
    padding-bottom: 150px;

    .footer {
        &__social-container {
            margin-right: 150px;
        }

        &__address {
            width: 200px;
        }
    }

    address {
        font-style: normal;
    }

    @media only screen and (max-width: ${BreakPointsEnum._mobile}) {
        flex-direction: column;
    }
`;

const FooterModuleHolder = styled.div`
    width: 100%;
    height: 344px;

    @media only screen and (max-width: ${BreakPointsEnum._mobile}) {
        height: 512px;
    }
`;
export { FooterModuleHolder };
export default StyledFooter;
