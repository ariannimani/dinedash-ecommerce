import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: inline-block;
  width: 43px;
  height: 22px;
  border-radius: 32px;
  background-color: #0c0c23;
  transition: background-color 0.3s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const Toggle = styled.div<{ on: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  top: 3px;
  left: ${(props) => (props.on ? "calc(100% - 22px)" : "2px")};
  transition: left 0.3s ease;
`;
