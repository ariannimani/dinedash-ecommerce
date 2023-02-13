import React from "react";
import { Forward, Back } from "./LinkButton.styles";

type ButtonType = "forward" | "back";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  forward: "forward",
  back: "back",
};
const getButton = (type: ButtonType = "forward") =>
  ({
    [BUTTON_TYPE_CLASSES.forward]: Forward,
    [BUTTON_TYPE_CLASSES.back]: Back,
  }[type]);

const LinkButton = ({
  children,
  type,
  icon,
  ...otherProps
}: {
  children: React.ReactNode;
  type: ButtonType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomLink = getButton(type);
  return (
    <CustomLink {...otherProps}>
      {type === "back" ? (
        <>
          {icon && icon}
          {children}
        </>
      ) : (
        <>
          {children}
          {icon && icon}
        </>
      )}
    </CustomLink>
  );
};

export default LinkButton;
