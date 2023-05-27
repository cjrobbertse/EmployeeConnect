import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import InputStyles from "./InputStyles";

//Typed properties of the component
interface InputProps {
  id?: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  maxDate?: string;
  minDate?: string;
  required?: boolean;
}
// Input easily combines the label and input components for use as a reusable component
const Input = ({
  label,
  type,
  value,
  onChange,
  id,
  checked,
  placeholder,
  minLength,
  maxLength,
  maxDate,
  minDate,
  required,
}: InputProps) => {
  return (
    <InputStyles>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        min={minDate}
        max={maxDate}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        id={id}
        name={label}
        required={required}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </InputStyles>
  );
};
export default Input;
