import styled from "styled-components";

export const Base = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 6px;
  width: 48px;
  height: 48px;
  background: ${(props) => props.theme.button.primary.background};
  color: ${(props) => props.theme.button.primary.color};
  border: none;
  border-radius: 0px 6px 6px 0px;
  font-size: 24px;
  &:hover {
    background: ${(props) => props.theme.button.primary.hover.background};
  }
`;
export const Logo = styled(Base)`
  padding: 10px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  color: ${(props) => props.theme.text.primary};
  border-radius: ${(props) => props.theme.icons.primary.radius};
  &:hover {
    background: ${(props) => props.theme.icons.primary.background};
  }
`;
export const LogoInverted = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.button.secondary.background};
  color: ${(props) => props.theme.button.secondary.color};
  border: ${(props) => props.theme.button.secondary.border};
  cursor: pointer;
  border-radius: ${(props) => props.theme.button.secondary.radius};
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
  &:hover {
    border: ${(props) => props.theme.button.secondary.hover.border};
    color: ${(props) => props.theme.button.secondary.hover.color};
  }
`;
export const Increment = styled(LogoInverted)`
  border-radius: 0px 6px 6px 0px;
  width: 32px;
  height: 32px;
`;
export const Decrement = styled(LogoInverted)`
  border-radius: 6px 0px 0px 6px;
  width: 32px;
  height: 32px;
`;
