import React, { PropsWithChildren, useEffect, useState } from "react";
import { IButton } from "./Button.types";
import { Styles } from "./Button.styles";
import { asyncFunc } from "../../utils/utils";
import SVGIcon from "../SVGIcon/SVGIcon";
import { ColorsEnum } from "../../types/global/colors";
import LoadIndicator from "../LoadIndicator/LoadIndicator";

const { StyledButton } = Styles;

const Button = ({
    onClick,
    onMouseEnter,
    onKeyDown,
    btnType,
    variant,
    label,
    loadingLabel,
    LeftIcon,
    RightIcon,
    iconColor,
    disabled: isDisabled,
    iconWidth,
    iconHeight,
    isLoading,
}: PropsWithChildren<IButton>) => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [btnLabel, setBtnLabel] = useState<string | undefined>(label);

    const hIcon = iconHeight ? iconHeight : "16px";
    const wIcon = iconWidth ? iconWidth : "16px";

    const onClickHandler = () => {
        if (onClick) {
            setDisabled(true);

            if (loadingLabel) {
                setBtnLabel(loadingLabel);
            }

            asyncFunc(onClick).then(() => {
                setDisabled(false);

                if (loadingLabel) {
                    setBtnLabel(label);
                }
            });
        }
    };

    const onKeyDownHandler = (e) => {
        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    const onMouseEnterHandler = (e) => {
        if (onMouseEnter) {
            onMouseEnter(e);
        }
    };

    return (
        <StyledButton
            disabled={isLoading}
            type={btnType}
            variant={variant}
            onClick={onClickHandler}
            onKeyDown={onKeyDownHandler}
            onMouseEnter={onMouseEnterHandler}
        >
            {LeftIcon && (
                <SVGIcon
                    Icon={LeftIcon}
                    width={wIcon}
                    height={hIcon}
                    currentColor={iconColor ? iconColor : ColorsEnum.gray_03}
                    iconHeight={hIcon}
                    iconWidth={wIcon}
                />
            )}
            {isLoading && <LoadIndicator color={ColorsEnum.gray_10} />}
            {btnLabel}
            {RightIcon && (
                <SVGIcon
                    Icon={RightIcon}
                    width={wIcon}
                    height={hIcon}
                    currentColor={iconColor ? iconColor : ColorsEnum.gray_03}
                    iconHeight={hIcon}
                    iconWidth={wIcon}
                />
            )}
        </StyledButton>
    );
};

export default Button;
