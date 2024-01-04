import { ChangeEvent, FC } from "react";
import "./Switch.styles.css";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleToggle} className="switch__input" />
      <span className="switch__slider" />
    </label>
  );
};
