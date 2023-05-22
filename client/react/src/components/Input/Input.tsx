import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import InputStyles from "./InputStyles";

interface InputProps {
  id?: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  placeholder?: string;
}
const Input = ({
  label,
  type,
  value,
  onChange,
  id,
  checked,
  placeholder,
}: InputProps) => {
  return (
    <InputStyles>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
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
