import {
  Decrement,
  Increment,
} from "components/buttons/icon-button/IconButton.styles";
import { Input } from "components/inputs";
import React from "react";
import { PickerContainer } from "./Picker.styles";

const Picker = () => {
  return (
    <PickerContainer>
      <Increment />
      <Input type="text" />
      <Decrement />
    </PickerContainer>
  );
};

export default Picker;
