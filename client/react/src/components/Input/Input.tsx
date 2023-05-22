import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import InputStyles from "./InputStyles";

interface InputProps {
  id?: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}
const Input = ({ label, type, value, onChange, id, checked }: InputProps) => {
  return (
    <InputStyles>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
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
