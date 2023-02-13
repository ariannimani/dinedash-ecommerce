import styled from "styled-components";

export const PrimaryTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  gap: ${(props) => (props.className === "small" ? "4px" : "6px")};
  width: fit-content;
  /* width: ${(props) => (props.className === "small" ? "50px" : "68px")}; */
  height: ${(props) => (props.className === "small" ? "24px" : "32px")};
  background: #0c0c23;
  border-radius: 6px;
  color: #ffffff;
  span {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SecondaryTag = styled(PrimaryTag)`
  background: #ffeff3;
  /* width: ${(props) => (props.className === "small" ? "50px" : "65px")}; */
  color: #0c0c23;
`;
