import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 335px;
  background: #ffffff;
  border: 1px solid #eae8ed;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  z-index: 0;
`;

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  width: 100%;
`;

export const Title = styled.div`
  color: #0c0c23;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;
export const Footer = styled.div`
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;
