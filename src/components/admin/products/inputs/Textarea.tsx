import React, { forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  error: boolean;
  helperText: string | undefined;
  label: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, helperText, label,type, ...inputProps }, ref) => {
    return (
      <div>
        <div className="flex flex-col items-start">
        <label className="m-1 font-bold">{label}</label>
        <textarea ref={ref} {...inputProps} className="text-textDarkPrimary px-2 font-extrabold w-full focus-visible:outline-none focus-visible:border-b-4 focus-visible:border-secondary"/>
        </div>
        {error && <span className="text-textWarning text-xs font-semibold">{helperText}</span> }
      </div>
    );
  }
);

export default Textarea;
