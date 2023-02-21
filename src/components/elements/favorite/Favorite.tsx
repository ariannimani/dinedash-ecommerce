import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FavMedium, FavSmall } from "./Favorite.styles";

type FavoriteSize = "medium" | "small";

const FAVORITE_SIZE_CLASSES: Record<FavoriteSize, string> = {
  medium: "medium",
  small: "small",
};
const getFavorite = (size: FavoriteSize = "medium") =>
  ({
    [FAVORITE_SIZE_CLASSES.medium]: FavMedium,
    [FAVORITE_SIZE_CLASSES.small]: FavSmall,
  }[size]);

const LinkFavorite = ({
  favorite = false,
  size,
  ...otherProps
}: {
  favorite: boolean;
  size: FavoriteSize;
  [key: string]: any;
}) => {
  const CustomLink = getFavorite(size);
  return (
    <CustomLink {...otherProps}>
      {favorite ? <FaHeart /> : <FaRegHeart />}
    </CustomLink>
  );
};

export default LinkFavorite;
