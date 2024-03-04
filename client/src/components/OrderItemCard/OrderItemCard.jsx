import PropTypes from "prop-types";
import {
  CardInfoWrapper,
  CardWrapper,
  DownwardButton,
  QuantityButtonsWrapper,
  QuantityInput,
  QuantityWrapper,
  UpwardButton,
} from "./OrderItemCard.styled";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromOrder,
} from "../../redux/orderSlice";
import { Notify } from "notiflix";

const OrderItemCard = ({ orderItem }) => {
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(incrementQuantity(orderItem._id));
  };

  const removeItem = () => {
    dispatch(removeFromOrder(orderItem._id));
    Notify.success(`${orderItem.itemName} removed from your order`, {
      position: "center-top",
    });
  };

  const decrementItem = () => {
    if (orderItem.quantity === 1) {
      removeItem();
    } else {
      dispatch(decrementQuantity(orderItem._id));
    }
  };

  return (
    <li>
      <CardWrapper>
        <img
          src={`https://placehold.co/272x200?text=${orderItem.itemName.replace(
            /\s/g,
            "+"
          )}`}
          alt={orderItem.itemName}
        />
        <CardInfoWrapper>
          <span>{orderItem.itemName}</span>
          <span>Price: ${orderItem.price.toFixed(2)}</span>
          <QuantityWrapper>
            <QuantityInput type="number" value={orderItem.quantity || 0} />
            <QuantityButtonsWrapper>
              <UpwardButton type="button" onClick={incrementItem}>
                ▲
              </UpwardButton>
              <DownwardButton type="button" onClick={decrementItem}>
                ▼
              </DownwardButton>
            </QuantityButtonsWrapper>
          </QuantityWrapper>
          <button type="button" onClick={removeItem}>
            Remove
          </button>
        </CardInfoWrapper>
      </CardWrapper>
    </li>
  );
};

OrderItemCard.propTypes = {
  orderItem: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

export default OrderItemCard;
