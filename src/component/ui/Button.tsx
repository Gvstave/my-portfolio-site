import type { ButtonProps } from "../../types/buttonType"

export const Button: React.FC<ButtonProps> = ({ className, onClick, type, name }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {name}
    </button>
  );
};