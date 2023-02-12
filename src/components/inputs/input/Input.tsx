import { Fragment } from "react";
import { Text, Search, Title } from "./Input.styles";

type InputType = "text" | "search";

const INPUT_TYPE_CLASSES: Record<InputType, string> = {
  text: "text",
  search: "search",
};

const getInput = (type: InputType = "text") =>
  ({
    [INPUT_TYPE_CLASSES.text]: Text,
    [INPUT_TYPE_CLASSES.search]: Search,
  }[type]);

const Button = ({
  title,
  type = "text",
  ...otherProps
}: {
  title: string;
  type?: InputType;
  [key: string]: any;
}) => {
  const CustomInput = getInput(type);
  return (
    <Fragment>
      <Title>{title}</Title>
      <CustomInput {...otherProps} />
    </Fragment>
  );
};

export default Button;
