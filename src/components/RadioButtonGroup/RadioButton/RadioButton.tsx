import React, { PropsWithChildren, useState } from "react";
import { IRadioButton } from "./RadioButton.types";
import StyledRadioButton from "./RadioButton.styles";
import { asyncFunc } from "../../../utils/utils";

const RadioButton = ({
    name,
    id,
    variant,
    onClick,
    label,
    defaultChecked,
    register,
}: PropsWithChildren<IRadioButton>) => {
    const [disabled, setDisabled] = useState<boolean>(false);

    const onClickHandler = () => {
        if (onClick) {
            setDisabled(true);

            asyncFunc(onClick).then(() => {
                setDisabled(false);
            });
        }
    };

    return (
        <StyledRadioButton id={id} variant={variant} onClick={onClickHandler}>
            <input
                type="radio"
                id={id}
                name={name}
                value={id}
                defaultChecked={defaultChecked}
                {...register(name)}
            />
            <label htmlFor={id}>{label}</label>
        </StyledRadioButton>
    );
};

export default RadioButton;
