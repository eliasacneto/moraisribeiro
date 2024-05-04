// FormField.tsx
import React from "react";
import { IMaskInput } from "react-imask";

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  mask?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  mask,
  required = false,
}) => {
  return (
    <div className="flex flex-col rounded w-full">
      <label>
        {label}
        <span className="text-rose-500">{required && "*"}</span>
      </label>
      {mask ? (
        <IMaskInput
          mask={mask}
          name={name}
          value={value}
          onChange={onChange as any} // Necessary cast for IMaskInput
          placeholder={placeholder}
          required={required}
          className="border p-2.5 rounded-lg w-full"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="border p-2.5 rounded-lg w-full"
        />
      )}
    </div>
  );
};

export default FormField;
