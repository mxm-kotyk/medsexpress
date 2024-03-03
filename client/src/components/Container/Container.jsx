import { StyledContainer } from "./Container.styled.jsx";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
