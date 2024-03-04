import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 748px;
  height: 300px;
  padding: 24px;
  display: flex;
  gap: 32px;
  border: 2px solid lightgray;
  border-radius: 6px;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  & span {
    font-size: 18px;
    font-weight: 600;
  }

  & span:first-of-type {
    font-size: 32px;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
`;

export const QuantityInput = styled.input`
  width: 120px;
  max-height: 52px;
  padding: 14px;
  background-color: transparent;
  font-size: 16px;
  line-height: calc(24 / 16);
  text-align: center;
  border-radius: 12px 0 0 12px;
  border: 1px solid #ccc;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const QuantityButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpwardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 24px;
  border-radius: 0 12px 0 0;
  border: 1px solid #ccc;

  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background: #ccc;
  }
`;

export const DownwardButton = styled(UpwardButton)`
  border-radius: 0 0 12px 0;
`;
