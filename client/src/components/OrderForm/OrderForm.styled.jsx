import styled from "@emotion/styled";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 274px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledSubmitButton = styled.button`
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

  &:hover:not([disabled]),
  &:focus-visible:not([disabled]) {
    background: #0b44cd;
  }

  &:disabled {
    background: #7a93cf;
    cursor: not-allowed;
  }
`;

export const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 28px;
`;
