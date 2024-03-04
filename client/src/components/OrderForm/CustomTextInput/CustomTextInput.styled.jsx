import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  text-transform: capitalize;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: all 100ms ease;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  input:focus + &,
  input:not(:placeholder-shown) + & {
    top: -18px;
    transform: translateY(0%);
    left: 0px;
    font-size: 12px;
    line-height: 140%;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-height: 52px;
  padding: 14px;
  background-color: transparent;
  font-size: 16px;
  line-height: calc(24 / 16);
  border-radius: 12px;
  border: 1px solid #ccc;

  &:focus-visible {
    border-color: #3470ff;
  }

  &.validation-failed {
    border-color: #d80027;
  }

  &.validation-success {
    border-color: #3cbf61;
  }

  &::placeholder {
    color: transparent;
  }

  &::-ms-reveal {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  bottom: -18px;
  left: 0px;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.12px;
  color: #d80027;
`;
