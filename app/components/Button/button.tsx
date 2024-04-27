import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
// Propriedades futuras (Se necessário)
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-[#C98264] hover:bg-[#c47642] mt-5 rounded-tr-[10px] rounded-bl-[10px] text-white py-3 px-8 duration-500 hover:duration-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
