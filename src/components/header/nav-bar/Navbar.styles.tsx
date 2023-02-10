import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  gap: 32px;
  color: ${(props) => props.theme.text.secondary};
  font-weight: 600;
`;

export const NavItem = styled.div`
  cursor: pointer;
`;
