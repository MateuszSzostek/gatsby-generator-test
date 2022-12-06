interface IRadioButton {
    name: string;
    id: RadioButtonIdEnum;
    variant?: RadioButtonVariant;
    onClick?: Function;
    label?: string;
    defaultChecked?: boolean;
    register?: any;
}

enum RadioButtonVariantEnum {
    primary = "primary",
}

enum RadioButtonIdEnum {
    pickupInTheOffice = "pickupInTheOffice",
    courier = "courier",
    parcelLocker = "parcelLocker",
}

type RadioButtonId =
    | RadioButtonIdEnum.pickupInTheOffice
    | RadioButtonIdEnum.courier
    | RadioButtonIdEnum.parcelLocker;

type RadioButtonVariant = RadioButtonVariantEnum.primary;

interface IStyledRadioButton {
    variant?: RadioButtonVariant;
    label?: string;
}

interface RadioButtonData {
    id: string;
    variant?: RadioButtonVariant;
    onClick?: Function;
    label?: string;
}

export type {
    IRadioButton,
    RadioButtonData,
    RadioButtonVariant,
    IStyledRadioButton,
    RadioButtonId,
};

export { RadioButtonVariantEnum, RadioButtonIdEnum };
