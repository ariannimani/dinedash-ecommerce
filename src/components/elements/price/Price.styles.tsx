import styled from "styled-components";

export const PrimaryPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 64px;
  height: 52px;
  background: #ffeff3;
  border-radius: 8px;
  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #0c0c23;
  }
`;

export const SecondaryPrice = styled(PrimaryPrice)`
  width: 107px;
  height: 32px;
  background: #f2f0f5;
  border-radius: 6px;
  span {
    font-size: 14px;
  }
`;
