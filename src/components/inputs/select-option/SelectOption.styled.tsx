import styled from "styled-components";

export const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  padding: 0px 16px;
  gap: 10px;
  width: 150px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #eae8ed;
  border-radius: 6px;
  :hover {
    border: 1px solid #0c0c23;
  }
`;
export const Option = styled.option`
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.04);
`;
