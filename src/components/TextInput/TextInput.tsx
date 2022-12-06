import React, { PropsWithChildren, useEffect, useState } from "react";
import { ITextInput } from "./TextInput.types";
import StyledTextInput from "./TextInput.styles";
import { nullHandler } from "../../utils/utils";
import SVGIcon from "../SVGIcon/SVGIcon";
import { ColorsEnum } from "../../types/global/colors";
import { AutocompleteOption } from "../../components/TextInput/TextInput.types";
import CanncelIcon from "../../assets/vector/cancel.svg";
import CheckmarkIcon from "../../assets/vector/checkmark.svg";
import _ from "lodash";
import { useForm } from "react-hook-form";

const TextInput = ({
    id,
    variant,
    textInputType,
    LeftIcon,
    RightIcon,
    label,
    placeholder,
    onChange,
    onKeyDown,
    value,
    register,
    error,
    autocompleteOptions,
    isClearable,
}: PropsWithChildren<ITextInput>) => {
    const [inputValue, setInputValue] = useState<string>(
        nullHandler(value) ? (value as string) : ""
    );

    const { trigger } = useForm();

    const [optionsList, setOptionsList] = useState<AutocompleteOption[]>(
        autocompleteOptions || []
    );

    const [showAutocompleteList, setShowAutocompleteList] =
        useState<boolean>(false);

    const updateAutocompleteList = (value: string) => {
        if (autocompleteOptions) {
            setOptionsList(
                autocompleteOptions.filter((el: AutocompleteOption) =>
                    el.value.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    const onKeyDownHandler = (e) => {
        if (onKeyDown) {
            onKeyDown(e);
        }
        updateAutocompleteList(e?.target?.value);
    };

    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e?.target?.value);
        }
        setInputValue(e?.target?.value);
        updateAutocompleteList(e?.target?.value);
    };

    const onOptionClickHandler = (value) => {
        if (onChange) {
            onChange(value);
        }
        setInputValue(value);
        updateAutocompleteList(value);
    };

    const onFocusHandler = (e) => {
        setShowAutocompleteList(true);
        updateAutocompleteList(e?.target?.value);
    };

    const onBlurHandler = (e) => {
        setShowAutocompleteList(false);
        updateAutocompleteList(e?.target?.value);
    };

    const clearInput = (e) => {
        setInputValue("");
        if (onChange) {
            onChange(e?.target?.value);
        }
    };

    const inputId = nullHandler(id) ? (id as string) : "";

    const registerInput = nullHandler(register)
        ? {
              ...register(id, {
                  onChange: (e) => {
                      onChangeHandler(e);
                  },
              }),
          }
        : {};

    useEffect(() => {
        async () => await trigger(id);
        let result;
    }, [inputValue]);

    return (
        <StyledTextInput
            variant={variant}
            LeftIcon={LeftIcon}
            RightIcon={RightIcon}
        >
            <label className="text-input__title" htmlFor={id}>
                {label}
            </label>
            <div className="text-input__icons-container">
                {LeftIcon && (
                    <div className="text-input__left-icon">
                        <SVGIcon Icon={LeftIcon} width="24px" height="24px" />
                    </div>
                )}
                {RightIcon && (
                    <div className="text-input__right-icon">
                        <SVGIcon Icon={RightIcon} width="24px" height="24px" />
                    </div>
                )}
                {!_.isEmpty(registerInput) && !error && inputValue !== "" && (
                    <div className="text-input__right-icon">
                        <SVGIcon
                            Icon={CheckmarkIcon}
                            width="24px"
                            height="24px"
                            currentColor={ColorsEnum.green_00}
                        />
                    </div>
                )}
                {isClearable && inputValue !== "" && (
                    <div
                        className="text-input__clear-button"
                        onClick={clearInput}
                    >
                        <SVGIcon
                            Icon={CanncelIcon}
                            width="24px"
                            height="24px"
                            currentColor={ColorsEnum.gray_00}
                        />
                    </div>
                )}
            </div>
            {optionsList && optionsList.length > 0 && showAutocompleteList && (
                <div className="text-input__autocomplete-container">
                    {optionsList.map((option) => (
                        <div
                            key={option.value}
                            className="text-input__autocomplete-option"
                            onMouseDown={() =>
                                onOptionClickHandler(option.value)
                            }
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}

            {register ? (
                <input
                    {...registerInput}
                    type={textInputType}
                    placeholder={placeholder}
                    value={inputValue}
                    name={inputId}
                />
            ) : (
                <input
                    type={textInputType}
                    placeholder={placeholder}
                    value={inputValue}
                    name={inputId}
                    onChange={(e) => {
                        onChangeHandler(e);
                    }}
                    onFocus={onFocusHandler}
                    onKeyDown={onKeyDownHandler}
                    onBlur={onBlurHandler}
                />
            )}

            {nullHandler(error) && (
                <label className="text-input__error">{error}</label>
            )}
        </StyledTextInput>
    );
};

export default TextInput;
