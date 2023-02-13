import styled from "styled-components";

export const Filter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;
  font-size: 16px;
  width: 138px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #eae8ed;
  border-radius: 0px 6px 6px 0px;
  color: #eae8ed;
  span {
    height: 22px;
  }
  &:hover {
    color: #0c0c23;
  }
`;

export const FilterWithIcon = styled(Filter)`
  width: 75px;
  height: 40px;
`;
