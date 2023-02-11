import {
  Base,
  BaseMedium,
  BaseSmall,
  BaseWithIcon,
  Inverted,
  InvertedMedium,
  InvertedWithIcon,
} from "./Button.styles";

type ButtonType =
  | "base"
  | "baseMedium"
  | "baseSmall"
  | "baseWithIcon"
  | "inverted"
  | "invertedMedium"
  | "invertedWithIcon";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  base: "base",
  baseMedium: "baseMedium",
  baseSmall: "baseSmall",
  baseWithIcon: "baseWithIcon",
  inverted: "inverted",
  invertedMedium: "invertedMedium",
  invertedWithIcon: "invertedWithIcon",
};

const getButton = (type: ButtonType = "base") =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Base,
    [BUTTON_TYPE_CLASSES.baseMedium]: BaseMedium,
    [BUTTON_TYPE_CLASSES.baseSmall]: BaseSmall,
    [BUTTON_TYPE_CLASSES.baseWithIcon]: BaseWithIcon,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted,
    [BUTTON_TYPE_CLASSES.invertedMedium]: InvertedMedium,
    [BUTTON_TYPE_CLASSES.invertedWithIcon]: InvertedWithIcon,
  }[type]);

const Button = ({
  children,
  type = "base",
  icon,
  ...otherProps
}: {
  children: React.ReactNode;
  type?: ButtonType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomButton = getButton(type);
  return (
    <CustomButton {...otherProps}>
      {icon && icon}
      <span>{children}</span>
    </CustomButton>
  );
};

export default Button;
