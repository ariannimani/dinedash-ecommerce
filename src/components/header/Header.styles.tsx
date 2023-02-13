import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 1em 1em 0 1em;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow.primary};
`;

export const Logo = styled.span`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.icons.primary.background};
  border-radius: 6px;
`;

export const Address = styled.div``;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
