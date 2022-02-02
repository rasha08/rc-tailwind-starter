import React, { FC, HTMLProps } from "react";
import { InputStyled } from "./input.styled";
import { useTranslation } from "react-i18next";

export type BaseInputProps = {
  label?: string;
} & HTMLProps<HTMLInputElement>;

export type InputP = BaseInputProps & {
  field: any;
  fieldState: any;
  formState: any;
};

export const Input: FC<InputP> = ({
  label,
  field,
  fieldState,
  formState,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <div className={"grid relative mb-2"}>
      {label && (
        <label htmlFor="" className="block text-gray-500 ">
          {t(label)}
        </label>
      )}
      <InputStyled {...field} invalid={fieldState.invalid} {...rest} />
      {!formState.isValid && fieldState.invalid && (
        <p className={"text-error-400 -mt-0.5"}>{fieldState.error?.message}</p>
      )}
    </div>
  );
};
