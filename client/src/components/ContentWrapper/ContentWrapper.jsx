import PropTypes from "prop-types";
import { StyledWrapper } from "./ContentWrapper.styles";

const ContentWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ContentWrapper;
