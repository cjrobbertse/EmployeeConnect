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
  maxLength?: number;
  maxDate?: string;
  minDate?: string;
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
  maxLength,
  maxDate,
  minDate,
}: InputProps) => {
  return (
    <InputStyles>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        min={minDate}
        max={maxDate}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        id={id}
        name={label}
        required
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </InputStyles>
  );
};
export default Input;
