import PropTypes from "prop-types";
import { AddToCartButton, CardInfoWrapper, CardWrapper } from "./Card.styled";

const Card = ({ drug, handleClick }) => {
  return (
    <li key={drug._id}>
      <CardWrapper>
        <img
          src={`https://placehold.co/272x200?text=${drug.name.replace(
            /\s/g,
            "+"
          )}`}
          alt={drug.name}
        />
        <CardInfoWrapper>
          <span>{drug.name}</span>
          <span>${drug.price.toFixed(2)}</span>
        </CardInfoWrapper>
        <AddToCartButton type="button" onClick={() => handleClick(drug)}>
          Add to Cart
        </AddToCartButton>
      </CardWrapper>
    </li>
  );
};

Card.propTypes = {
  drug: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

export default Card;
