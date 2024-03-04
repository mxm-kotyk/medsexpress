import Container from "components/Container";
import ContentWrapper from "components/ContentWrapper";
import OrderForm from "components/OrderForm";
import OrderItemCard from "components/OrderItemCard";
import OrderItemsList from "components/OrderItemsList";
import Section from "components/Section";
import { useSelector } from "react-redux";
import { getOrderItems } from "../redux/selectors";

const ShoppingCartPage = () => {
  const orderItems = useSelector(getOrderItems);

  const emptyOrderMessage =
    "Your order list is empty. Add some items to cart and they will appear here.";

  return (
    <>
      <Section>
        <Container>
          <ContentWrapper>
            <OrderForm />
          </ContentWrapper>
          <ContentWrapper>
            <OrderItemsList>
              {orderItems.length > 0
                ? orderItems.map((item) => (
                    <OrderItemCard key={item._id} orderItem={item} />
                  ))
                : emptyOrderMessage}
            </OrderItemsList>
          </ContentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default ShoppingCartPage;
