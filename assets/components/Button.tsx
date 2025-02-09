import React from "react";

interface Props {
  children: String;
  color: "primary" | "secondary";
  onClick: () => void;
}
const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
