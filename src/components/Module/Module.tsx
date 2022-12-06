import React, { PropsWithChildren } from "react";
import { IModule } from "./Module.types";
import StyledModule from "./Module.styles";

const Module = ({ variant, children }: PropsWithChildren<IModule>) => {
    return (
        <StyledModule variant={variant}>
            <div className="module__container">
                <div className="module__wrapper">{children}</div>
            </div>
        </StyledModule>
    );
};

export default Module;
