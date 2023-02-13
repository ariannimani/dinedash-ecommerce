import { useState } from "react";
import { Toggle, ToggleContainer } from "./ToggleButton.styles";

type SwitchProps = {
  onToggle: () => void;
  defaultOn?: boolean;
};

const ToggleButton = ({ onToggle, defaultOn = false }: SwitchProps) => {
  const [on, setOn] = useState(defaultOn);

  const handleClick = () => {
    setOn(!on);
    onToggle();
  };

  return (
    <ToggleContainer onClick={handleClick}>
      <Toggle on={on} />
    </ToggleContainer>
  );
};

export default ToggleButton;
