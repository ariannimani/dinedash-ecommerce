import styled from "styled-components";

export const Popular = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  gap: 6px;
  width: 263px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #eae8ed;
  span {
    height: 22px;
  }
`;

export const PopularActive = styled(Popular)`
  gap: 10px;
  background: #fbfbfb;
  border: 1px solid #eae8ed;
  border-radius: 12px 12px 0px 0px;
`;
