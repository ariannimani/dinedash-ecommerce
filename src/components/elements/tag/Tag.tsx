import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { PrimaryTag, SecondaryTag } from "./Tag.styles";

type TagType = "primary" | "secondary";
type SizeType = "medium" | "small";
type VariantType = "rating" | "clock";

const TAG_TYPE_CLASSES: Record<TagType, string> = {
  primary: "primary",
  secondary: "secondary",
};

const getTag = (type: TagType = "primary") =>
  ({
    [TAG_TYPE_CLASSES.primary]: PrimaryTag,
    [TAG_TYPE_CLASSES.secondary]: SecondaryTag,
  }[type]);

const SIZE_TYPE_CLASSES: Record<SizeType, string> = {
  medium: "medium",
  small: "small",
};

const getSize = (size: SizeType = "medium") =>
  ({
    [SIZE_TYPE_CLASSES.medium]: "medium",
    [SIZE_TYPE_CLASSES.small]: "small",
  }[size]);

const VARIANT_TYPE_CLASSES: Record<VariantType, string> = {
  rating: "rating",
  clock: "clock",
};

const getVariant = (variant: VariantType = "rating") =>
  ({
    [VARIANT_TYPE_CLASSES.rating]: "rating",
    [VARIANT_TYPE_CLASSES.clock]: "clock",
  }[variant]);

const Tag = ({
  children,
  type = "primary",
  size = "medium",
  icon,
  variant,
  ...otherProps
}: {
  children: React.ReactNode;
  type?: TagType;
  size?: SizeType;
  variant?: VariantType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomTag = getTag(type);
  const className = getSize(size);
  const variantName = getVariant(variant);
  return (
    <CustomTag className={className} {...otherProps}>
      {variantName === "rating" ? <AiOutlineStar /> : <FiClock />}
      <span>{children}</span>
    </CustomTag>
  );
};

export default Tag;
