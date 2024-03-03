import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  height: 85dvh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: 2px solid lightgray;
  border-radius: 12px;
  overflow-y: auto;
  overflow-x: hidden;

  & h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: calc(20 / 18);
  }
`;
