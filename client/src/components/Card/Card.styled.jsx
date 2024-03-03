import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 320px;
  height: 340px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid lightgray;
  border-radius: 6px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  width: 256px;
  height: 38px;
  padding-inline: 12px;
  place-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: #0b44cd;
  }
`;
