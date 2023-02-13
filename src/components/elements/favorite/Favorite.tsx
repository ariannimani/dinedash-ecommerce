import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FavMedium, FavSmall } from "./Favorite.styles";

type FavoriteType = "medium" | "small";

const FAVORITE_TYPE_CLASSES: Record<FavoriteType, string> = {
  medium: "medium",
  small: "small",
};
const getFavorite = (type: FavoriteType = "medium") =>
  ({
    [FAVORITE_TYPE_CLASSES.medium]: FavMedium,
    [FAVORITE_TYPE_CLASSES.small]: FavSmall,
  }[type]);

const LinkFavorite = ({
  favorite = false,
  type,
  ...otherProps
}: {
  favorite: boolean;
  type: FavoriteType;
  [key: string]: any;
}) => {
  const CustomLink = getFavorite(type);
  return (
    <CustomLink {...otherProps}>
      {favorite ? <FaHeart /> : <FaRegHeart />}
    </CustomLink>
  );
};

export default LinkFavorite;
