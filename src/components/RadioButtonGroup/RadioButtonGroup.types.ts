import { IRadioButton } from "./RadioButton/RadioButton.types";

interface IRadioButtonGroup {
    id: RadioButtonGroupId;
    variant?: RadioButtonGroupVariant;
    label?: string;
    radioButtonOptions: IRadioButton[];
    defaultValue?: string;
    register?: any;
}

enum RadioButtonGroupVariantEnum {
    primary = "primary",
}

enum RadioButtonGroupId {
    deliveryMethod = "deliveryMethod",
}

type RadioButtonGroupVariant = RadioButtonGroupVariantEnum.primary;

interface IStyledRadioButtonGroup {
    variant?: RadioButtonGroupVariant;
    leftIcon?: string;
    rightIcon?: string;
    label?: string;
}

export type {
    IRadioButtonGroup,
    RadioButtonGroupVariant,
    IStyledRadioButtonGroup,
};

export { RadioButtonGroupVariantEnum, RadioButtonGroupId };
