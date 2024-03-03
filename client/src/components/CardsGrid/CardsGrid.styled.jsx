import styled from "@emotion/styled";

export const StyledGrid = styled.ul`
  width: 710px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(274px, 100%), 1fr));
  grid-auto-rows: 1fr;
  justify-items: center;
  row-gap: 50px;
  column-gap: 29px;
`;
