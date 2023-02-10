import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { themeTypes } from "theme";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import {
  HeaderContainer,
  Icon,
  Icons,
  Logo,
  Address,
  LeftSide,
} from "./Header.styles";
import { ReactComponent as Burger } from "assets/svg/burger.svg";
import NavBar from "./nav-bar/NavBar";
import { IoLocationOutline } from "react-icons/io5";

interface HeaderProps {
  updateTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ updateTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <LeftSide>
        <Logo>
          <Burger />
          <span>DineDash</span>
        </Logo>
        <Address>
          <IoLocationOutline />
        </Address>
      </LeftSide>
      <NavBar />
      <Icons>
        {theme.type !== themeTypes.light ? (
          <Icon onClick={updateTheme}>
            <MdOutlineDarkMode />
          </Icon>
        ) : (
          <Icon onClick={updateTheme}>
            <MdDarkMode />
          </Icon>
        )}
        <Icon>
          <BiUser />
        </Icon>
        <Icon>
          <FiShoppingCart />
        </Icon>
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
