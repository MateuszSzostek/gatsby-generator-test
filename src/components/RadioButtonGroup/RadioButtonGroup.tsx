import React, { PropsWithChildren, useState, useEffect } from "react";
import { IRadioButtonGroup } from "./RadioButtonGroup.types";
import StyledRadioButtonGroup from "./RadioButtonGroup.styles";
import RadioButton from "./RadioButton/RadioButton";
import {
    RadioButtonId,
    RadioButtonIdEnum,
} from "./RadioButton/RadioButton.types";
import { IRadioButton } from "./RadioButton/RadioButton.types";
import { nullHandler } from "../../utils/utils";

const RadioButtonGroup = ({
    id,
    variant,
    label,
    radioButtonOptions,
    defaultValue,
    register,
}: PropsWithChildren<IRadioButtonGroup>) => {
    return (
        <StyledRadioButtonGroup variant={variant}>
            <legend>{label}</legend>
            {radioButtonOptions.map((radioButton: IRadioButton) => (
                <RadioButton
                    key={radioButton.id}
                    id={radioButton.id as RadioButtonIdEnum}
                    name={id}
                    label={radioButton.label}
                    defaultChecked={
                        defaultValue === radioButton.id ? true : false
                    }
                    register={register}
                />
            ))}
        </StyledRadioButtonGroup>
    );
};

export default RadioButtonGroup;
