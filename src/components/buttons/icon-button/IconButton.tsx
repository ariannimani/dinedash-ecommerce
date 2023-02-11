import {
  Base,
  Logo,
  LogoInverted,
  Increment,
  Decrement,
} from "./IconButton.styles";

type IconButtonType =
  | "base"
  | "logo"
  | "logoInverted"
  | "increment"
  | "decrement";

const BUTTON_TYPE_CLASSES: Record<IconButtonType, string> = {
  base: "base",
  logo: "logo",
  logoInverted: "logoInverted",
  increment: "increment",
  decrement: "decrement",
};

const getButton = (type: IconButtonType = "base") =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Base,
    [BUTTON_TYPE_CLASSES.logo]: Logo,
    [BUTTON_TYPE_CLASSES.logoInverted]: LogoInverted,
    [BUTTON_TYPE_CLASSES.increment]: Increment,
    [BUTTON_TYPE_CLASSES.decrement]: Decrement,
  }[type]);

const Button = ({
  children,
  type = "base",
  icon,
  ...otherProps
}: {
  children?: React.ReactNode;
  type?: IconButtonType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomIconButton = getButton(type);
  return (
    <CustomIconButton {...otherProps}>
      <span>{icon ? icon : children}</span>
    </CustomIconButton>
  );
};

export default Button;
