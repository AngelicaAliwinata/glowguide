// components/FormWrapper.tsx
import React from "react";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, title }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-center text-2xl font-bold text-brown mb-6">{title}</h2>
      {children}
    </div>
  </div>
);

export default FormWrapper;
