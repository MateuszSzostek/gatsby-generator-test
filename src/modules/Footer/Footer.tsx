import React from "react";
import Module from "../../components/Module/Module";
import Text from "../../components/Text/Text";
import { TextVariantEnum } from "../../components/Text/Text.types";
import Button from "../../components/Button/Button";
import FacebookIcon from "../../assets/vector/facebook.svg";
import LinkedinIcon from "../../assets/vector/linkedin.svg";
import InstagramIcon from "../../assets/vector/instagram.svg";
import { ColorsEnum } from "../../types/global/colors";
import { ButtonVariantEnum } from "../../components/Button/Button.types";
import StyledFooter, { FooterModuleHolder } from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterModuleHolder />
      <Module>
        <StyledFooter>
          <div>
            <Text variant={TextVariantEnum.footerHeader}>oakshop</Text>
            <div className="footer__social-container">
              <a
                href="https://www.facebook.com/OakfusionSoftwareHouse"
                target="_blank"
              >
                <Button
                  LeftIcon={FacebookIcon}
                  iconColor={ColorsEnum.gray_10}
                  iconHeight="32px"
                  iconWidth="32px"
                  variant={ButtonVariantEnum.iconButton}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/oakfusion/"
                target="_blank"
              >
                <Button
                  LeftIcon={LinkedinIcon}
                  iconColor={ColorsEnum.gray_10}
                  iconHeight="32px"
                  iconWidth="32px"
                  variant={ButtonVariantEnum.iconButton}
                />
              </a>
              <a href="https://www.instagram.com/oakfusion/" target="_blank">
                <Button
                  LeftIcon={InstagramIcon}
                  iconColor={ColorsEnum.gray_10}
                  iconHeight="32px"
                  iconWidth="32px"
                  variant={ButtonVariantEnum.iconButton}
                />
              </a>
            </div>
          </div>
          <div className="footer__address">
            <address>
              <Text variant={TextVariantEnum.primaryWhite}>
                Oakshop by Oakfusion Żmigrodzka 244 51-131 Wrocław, Poland
              </Text>

              <a href="mailto:office@oakfusion.pl">
                <Text variant={TextVariantEnum.primaryWhite}>
                  office@oakfusion.pl
                </Text>
              </a>

              <Text variant={TextVariantEnum.primaryWhite}>
                +48 692 520 453
              </Text>
            </address>
          </div>
        </StyledFooter>
      </Module>
    </>
  );
};

export default Footer;
