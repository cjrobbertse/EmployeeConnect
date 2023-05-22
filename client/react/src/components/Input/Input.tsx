import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

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
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={label}
        required
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </p>
  );
};
export default Input;
