import styled from "styled-components";

export const Base = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 12px;
  width: 240px;
  height: 48px;
  background: ${(props) => props.theme.button.primary.background};
  color: ${(props) => props.theme.button.primary.color};
  border: ${(props) => props.theme.button.primary.border};
  cursor: pointer;
  border-radius: ${(props) => props.theme.button.primary.radius};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  span {
    height: 22px;
  }
  &:hover {
    background: ${(props) => props.theme.button.primary.hover.background};
  }
`;

export const BaseMedium = styled(Base)`
  padding: 10px;
  gap: 10px;
  width: 105px;
  height: 40px;
  span {
    height: 22px;
  }
`;
export const BaseSmall = styled(Base)`
  padding: 8px 16px 10px;
  gap: 6px;
  width: 107px;
  height: 32px;
  span {
    height: 19px;
  }
`;

export const BaseWithIcon = styled(Base)`
  width: 200px;
  height: 48px;
  span {
    height: 22px;
  }
`;

export const Inverted = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 6px;
  width: 125px;
  height: 48px;
  background: ${(props) => props.theme.button.secondary.background};
  color: ${(props) => props.theme.button.secondary.color};
  border: ${(props) => props.theme.button.secondary.border};
  cursor: pointer;
  border-radius: ${(props) => props.theme.button.secondary.radius};
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
  &:hover {
    border: ${(props) => props.theme.button.secondary.hover.border};
    color: ${(props) => props.theme.button.secondary.hover.color};
  }
`;

export const InvertedMedium = styled(Inverted)`
  width: 125px;
  height: 40px;
  span {
    height: 19px;
  }
`;

export const InvertedWithIcon = styled(Inverted)``;
