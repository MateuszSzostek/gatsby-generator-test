interface AutocompleteOption {
    label: string;
    value: string;
}

interface ITextInput {
    id?: string;
    variant?: TextInputVariant;
    textInputType?: TextInputType;
    LeftIcon?: string;
    RightIcon?: string;
    label?: string;
    placeholder?: string;
    onChange?: Function;
    onKeyDown?: Function;
    value?: string;
    register?: any;
    error?: string;
    autocompleteOptions?: AutocompleteOption[];
    isClearable?: boolean;
}

enum TextInputVariantEnum {
    primary = "primary",
}

enum TextInputTypeEnum {
    text = "text",
    textarea = "textarea",
    email = "email",
    number = "number",
    password = "password",
    tel = "tel",
    url = "url",
}

enum TextInputId {
    name = "name",
    surname = "surname",
    phone = "number",
    street = "street",
    buildingNo = "buildingNo",
    premisesNo = "premisesNo",
    city = "city",
    zipCode = "zipCode",
    cityStreetOrZipCode = "cityStreetOrZipCode",
}

type TextInputVariant = TextInputVariantEnum.primary;

type TextInputType =
    | TextInputTypeEnum.text
    | TextInputTypeEnum.textarea
    | TextInputTypeEnum.email
    | TextInputTypeEnum.number
    | TextInputTypeEnum.password
    | TextInputTypeEnum.tel
    | TextInputTypeEnum.url;

interface IStyledTextInput {
    variant?: TextInputVariant;
    LeftIcon?: string;
    RightIcon?: string;
    label?: string;
}

export type {
    ITextInput,
    TextInputVariant,
    IStyledTextInput,
    TextInputType,
    AutocompleteOption,
};

export { TextInputVariantEnum, TextInputTypeEnum, TextInputId };
