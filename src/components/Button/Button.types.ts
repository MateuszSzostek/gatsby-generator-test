interface IButton {
    onClick?: Function;
    onMouseEnter?: Function;
    onKeyDown?: Function;
    btnType?: ButtonType;
    variant?: ButtonVariant;
    label?: string;
    loadingLabel?: string;
    LeftIcon?: any;
    RightIcon?: any;
    iconColor?: string;
    disabled?: boolean;
    iconWidth?: string;
    iconHeight?: string;
    isLoading?: boolean;
}

enum ButtonVariantEnum {
    primary = "primary",
    primaryFullSize = "primaryFullSize",
    outlined = "outlined",
    simple = "simple",
    iconButton = "iconButton",
    redIconButton = "redIconButton",
}

enum ButtonTypeEnum {
    submit = "submit",
    button = "button",
    reset = "reset",
}

enum ButtonIdEnum {
    test1 = "test1",
    test2 = "test2",
    basket = "basket",
    addToBasket = "addToBasket",
}

type ButtonId =
    | ButtonIdEnum.test1
    | ButtonIdEnum.test2
    | ButtonIdEnum.basket
    | ButtonIdEnum.addToBasket;

type ButtonVariant =
    | ButtonVariantEnum.primary
    | ButtonVariantEnum.primaryFullSize
    | ButtonVariantEnum.outlined
    | ButtonVariantEnum.simple
    | ButtonVariantEnum.iconButton
    | ButtonVariantEnum.redIconButton;

type ButtonType =
    | ButtonTypeEnum.submit
    | ButtonTypeEnum.button
    | ButtonTypeEnum.reset;

interface StyledButton {
    variant?: ButtonVariant;
    leftIcon?: string;
    rightIcon?: string;
    label?: string;
}

export type { IButton, ButtonVariant, StyledButton, ButtonType };

export { ButtonVariantEnum, ButtonTypeEnum, ButtonIdEnum };
