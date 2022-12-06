import React, { PropsWithChildren } from "react";
import StyledLayout from "./Layout.styles";
import Navigation from "../../modules/Navigation/Navigation";
import Footer from "../../modules/Footer/Footer";

const Layout = ({
  children,
  backgroundColor,
}: PropsWithChildren<{ backgroundColor: string }>) => {
  return (
    <StyledLayout backgroundColor={backgroundColor}>{children}</StyledLayout>
  );
};

export default Layout;
