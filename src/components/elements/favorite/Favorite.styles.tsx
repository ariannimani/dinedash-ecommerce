import styled from "styled-components";

export const FavMedium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: rgba(46, 46, 51, 0.45);
  border-radius: 6px;
`;

export const FavSmall = styled(FavMedium)`
  padding: 0px;
  width: 24px;
  height: 24px;
  background: rgba(12, 12, 35, 0.4);
`;
