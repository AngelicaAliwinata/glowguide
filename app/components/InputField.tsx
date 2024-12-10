// components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => (
  <div className="flex flex-col mb-4">
    <label className="text-brown font-bold mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 border rounded-md focus:outline-none focus:ring focus:ring-pinkDark"
    />
  </div>
);

export default InputField;
