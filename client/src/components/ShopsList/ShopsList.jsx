import PropTypes from "prop-types";
import { StyledList } from "./ShopsList.styled";

const ShopsList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

ShopsList.propTypes = {
  children: PropTypes.node,
};

export default ShopsList;
