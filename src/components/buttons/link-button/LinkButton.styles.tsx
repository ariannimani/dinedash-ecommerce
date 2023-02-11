import styled from "styled-components";

export const Forward = styled.button`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 27px;
  width: fit-content;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => props.theme.text.primary};
  cursor: pointer;
  &:hover {
    color: #eca3b6;
  }
`;

export const Back = styled(Forward)`
  gap: 6px;
  height: 22px;
  color: #abaaad;
  &:hover {
    color: ${(props) => props.theme.text.primary};
  }
`;
