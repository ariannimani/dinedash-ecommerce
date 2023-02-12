import { IconButton } from "components/buttons";
import { MdOutlineDone } from "react-icons/md";
import {
  SearchInput,
  SearchWithButton,
  InputWrapper,
  InputDiv,
} from "./Search.styles";

type SearchType = "search" | "searchWithButton";

const SEARCH_TYPE_CLASSES: Record<SearchType, string> = {
  search: "search",
  searchWithButton: "searchWithButton",
};

const getSearch = (type: SearchType = "search") =>
  ({
    [SEARCH_TYPE_CLASSES.search]: SearchInput,
    [SEARCH_TYPE_CLASSES.searchWithButton]: SearchWithButton,
  }[type]);

const Search = ({
  type = "search",
  icon,
  ...otherProps
}: {
  type?: SearchType;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  const CustomSearch = getSearch(type);
  return (
    <InputWrapper>
      <InputDiv>
        {icon && icon}
        <CustomSearch {...otherProps} />
      </InputDiv>
      {type === "searchWithButton" && (
        <IconButton type="base" icon={<MdOutlineDone />} />
      )}
    </InputWrapper>
  );
};

export default Search;
