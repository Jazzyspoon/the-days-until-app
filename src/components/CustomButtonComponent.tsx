import React from "react";

interface Props {
  borderColor: string;
  borderWidth: string;
  backgroundColor: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
  margin: string;
  fontSize: string;
  color: string,
  }

const Button: React.FC<Props> = ({ 
    borderColor,
    borderWidth,
    backgroundColor,
    children,
    height,
    onClick, 
    radius,
    width, 
    margin,
    fontSize,
    color
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor,
         borderColor,
         borderWidth,
         borderRadius: radius,
         height,
         width, 
         margin,
         fontSize,
         color,
      }}
    >
    {children}
    </button>
  );
}

export default Button;