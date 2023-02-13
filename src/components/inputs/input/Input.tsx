import { Fragment } from "react";
import { Text, Title, Date } from "./Input.styles";

type InputType = "text" | "date";

const INPUT_TYPE_CLASSES: Record<InputType, string> = {
  text: "text",
  date: "date",
};

const getInput = (type: InputType = "text") =>
  ({
    [INPUT_TYPE_CLASSES.text]: Text,
    [INPUT_TYPE_CLASSES.date]: Date,
  }[type]);

const Input = ({
  title,
  type = "text",
  ...otherProps
}: {
  title?: string;
  type: InputType;
  [key: string]: any;
}) => {
  const CustomInput = getInput(type);
  return (
    <Fragment>
      <Title>{title}</Title>
      <CustomInput type={type} {...otherProps} />
    </Fragment>
  );
};

export default Input;
