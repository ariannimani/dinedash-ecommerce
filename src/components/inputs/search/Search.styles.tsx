import styled from "styled-components";

export const InputDiv = styled.div`
  width: 360px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: 1.5px solid #eae8ed;
  border-radius: 6px;
  padding-left: 5px;
  margin-right: -10px;

  :focus-within {
    outline: 1px solid #0c0c23;
  }
  :disabled {
    background: #f2f0f5;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 95%;
  height: 95%;
  border: none;
  font-size: 16px;
  background: transparent;
  margin: 0;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  ::placeholder {
    color: ${(props) => props.theme.text.secondary};
  }
  :focus {
    outline: none;
  }
`;

export const SearchWithButton = styled(SearchInput)``;
