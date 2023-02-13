import styled from "styled-components";

export const Area = styled.textarea`
  box-sizing: border-box;
  background: ${(props) => props.theme.background.primary};
  border: ${(props) => props.theme.button.secondary.border};
  border-radius: 6px;
  width: 240px;
  height: 150px;
  font-size: 16px;
  resize: none;
  ::placeholder {
    color: ${(props) => props.theme.text.secondary};
  }
  :focus {
    border: 1px solid #0c0c23;
    outline: none;
  }
  :disabled {
    background: #f2f0f5;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.text.primary};
`;
