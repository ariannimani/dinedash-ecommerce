import { PrimaryPrice, SecondaryPrice } from "./Price.styles";

type PriceType = "primary" | "secondary";

const PRICE_TYPE_CLASSES: Record<PriceType, string> = {
  primary: "primary",
  secondary: "secondary",
};

const getPrice = (type: PriceType = "primary") =>
  ({
    [PRICE_TYPE_CLASSES.primary]: PrimaryPrice,
    [PRICE_TYPE_CLASSES.secondary]: SecondaryPrice,
  }[type]);

const Price = ({
  children,
  type = "primary",
  icon,
  ...otherProps
}: {
  children: React.ReactNode;
  type?: PriceType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomPrice = getPrice(type);
  return (
    <CustomPrice {...otherProps}>
      {icon && icon}
      <span>{children}</span>
    </CustomPrice>
  );
};

export default Price;
