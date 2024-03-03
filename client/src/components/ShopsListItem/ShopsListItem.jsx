import PropTypes from "prop-types";
import { StyledShopButton } from "./ShopsListItem.styled";

const ShopsListItem = ({ store, handleClick }) => {
  return (
    <li key={store._id}>
      <StyledShopButton type="button" onClick={() => handleClick(store._id)}>
        {store.name}
      </StyledShopButton>
    </li>
  );
};

ShopsListItem.propTypes = {
  store: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

export default ShopsListItem;
