import PropTypes from "prop-types";
import { StyledGrid } from "./CardsGrid.styled";

const CardsGrid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

CardsGrid.propTypes = {
  children: PropTypes.node,
};

export default CardsGrid;
