import { Filter, FilterWithIcon } from "./FilterButton.styles";

type ButtonType = "filter" | "filterWithIcon";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  filter: "filter",
  filterWithIcon: "filterWithIcon",
};

const getButton = (type: ButtonType = "filter") =>
  ({
    [BUTTON_TYPE_CLASSES.filter]: Filter,
    [BUTTON_TYPE_CLASSES.filterWithIcon]: FilterWithIcon,
  }[type]);

const Button = ({
  children,
  type = "filter",
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
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </CustomButton>
  );
};

export default Button;
