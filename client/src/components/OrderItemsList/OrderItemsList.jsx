import PropTypes from "prop-types";
import { StyledList } from "./OrederItemsList.styled";

const OrderItemsList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

OrderItemsList.propTypes = {
  children: PropTypes.node,
};

export default OrderItemsList;
