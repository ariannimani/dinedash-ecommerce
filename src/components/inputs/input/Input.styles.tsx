import styled from "styled-components";

export const Text = styled.input`
  box-sizing: border-box;
  background: ${(props) => props.theme.background.primary};
  border: ${(props) => props.theme.button.secondary.border};
  border-radius: 6px;
  width: 200px;
  height: 48px;
  font-size: 16px;
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

export const Search = styled(Text)``;
