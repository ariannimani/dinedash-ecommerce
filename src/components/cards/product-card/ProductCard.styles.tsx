import styled from "styled-components";

export const Description = styled.span`
  opacity: 0;
  margin-top: -48px;
  margin-bottom: 8px;
`;
export const Image = styled.img``;

export const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #0c0c23;
`;

export const Info = styled.span`
  color: #abaaad;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 20px;
  gap: 14px;
  width: 262px;
  height: 278px;
  background: #ffffff;
  border: 1px solid #eae8ed;
  border-radius: 12px;

  &:hover ${Description} {
    opacity: 1;
    margin-top: 0px;
  }

  &:hover ${Image} {
    opacity: 0.3;
  }
  &:hover ${Title} {
    margin-top: -48px;
  }
`;

export const Header = styled.div``;

export const Footer = styled.div``;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  gap: 8px;
`;
