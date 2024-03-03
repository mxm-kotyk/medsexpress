import styled from "@emotion/styled";

export const StyledShopButton = styled.button`
  display: flex;
  width: 274px;
  height: 60px;
  padding-inline: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: #0b44cd;
  }
`;
