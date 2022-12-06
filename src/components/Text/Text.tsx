import React, { PropsWithChildren } from "react";
import { IText } from "./Text.types";
import StyledText from "./Text.styles";

const Text = ({ color, asTag, children }: PropsWithChildren<IText>) => {
  return (
    <StyledText color={color} as={asTag}>
      {children}
    </StyledText>
  );
};

export default Text;
