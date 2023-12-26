import React, { forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error: boolean;
  helperText: string | undefined;
  type?: "text" | "number";
  label: string;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ error, helperText, label,type, ...inputProps }, ref) => {
    return (
      <div>
        <div className="flex flex-col items-start">
        <label className="m-1 font-bold">{label}</label>
        <input type={type} ref={ref} {...inputProps} className="text-textDarkPrimary px-2 font-extrabold uppercase w-full focus-visible:border-b-4 focus-visible:border-secondary"/>
        </div>
        {error && <span className="text-textWarning text-xs font-semibold">{helperText}</span> }
      </div>
    );
  }
);

export default TextInput;
