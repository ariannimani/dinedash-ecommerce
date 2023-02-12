import { Popular, PopularActive } from "./PopularButton.styles";
import { AiFillFire } from "react-icons/ai";

type ButtonType = "popular" | "popularActive";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  popular: "popular",
  popularActive: "popularActive",
};

const getButton = (type: ButtonType = "popular") =>
  ({
    [BUTTON_TYPE_CLASSES.popular]: Popular,
    [BUTTON_TYPE_CLASSES.popularActive]: PopularActive,
  }[type]);

const Button = ({
  children,
  type = "popular",
  ...otherProps
}: {
  children: React.ReactNode;
  type?: ButtonType;
  [key: string]: any;
}) => {
  const CustomButton = getButton(type);
  return (
    <CustomButton {...otherProps}>
      {type === "popularActive" && <AiFillFire color="#FFBB5E" />}
      <span>{children}</span>
    </CustomButton>
  );
};

export default Button;
