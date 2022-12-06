import React from "react";
import GlobalStyles from "./globalStyles";
import "./src/assets/fonts/fonts.css";

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <GlobalStyles />
            {element}
        </>
    );
};
