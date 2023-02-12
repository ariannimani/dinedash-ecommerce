import { Fragment } from "react";
import { Area, Title } from "./TextArea.styles";

const TextArea = ({
  title,
  ...otherProps
}: {
  title: string;
  [key: string]: any;
}) => {
  return (
    <Fragment>
      <Title></Title>
      <Area {...otherProps} />
    </Fragment>
  );
};

export default TextArea;
