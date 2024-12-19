// components/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-pinkDark text-white py-3 rounded-md font-bold hover:bg-pinkDark/90"
  >
    {label}
  </button>
);

export default Button;
