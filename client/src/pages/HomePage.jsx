import { useGetDrugsQuery, useGetStoresQuery } from "../../redux/api";
import Section from "components/Section";
import Container from "components/Container";
import ContentWrapper from "components/ContentWrapper";
import ShopsList from "components/ShopsList";
import ShopsListItem from "components/ShopsListItem/ShopsListItem";
import CardsGrid from "components/CardsGrid";
import Card from "components/Card/Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder, incrementQuantity } from "../../redux/orderSlice";
import { getOrderItems } from "../../redux/selectors";

const filterDrugs = (selectedStore, drugs) => {
  if (selectedStore === "") return drugs;
  return drugs.filter((drug) => drug.store === selectedStore);
};

const HomePage = () => {
  const { data: stores } = useGetStoresQuery();
  const { data: drugs } = useGetDrugsQuery();
  const dispatch = useDispatch();
  const orderItems = useSelector(getOrderItems);
  const [selectedStore, setSelectedStore] = useState("");

  const selectStore = (id) => {
    setSelectedStore(id);
  };

  const filteredDrugs = drugs && filterDrugs(selectedStore, drugs);

  const addToCart = ({ name, price, store, _id }) => {
    const itemIndex = orderItems.findIndex((item) => item._id === _id);

    if (itemIndex === -1) {
      dispatch(addToOrder({ itemName: name, price, store, quantity: 1, _id }));
    } else {
      dispatch(incrementQuantity(_id));
    }
  };

  return (
    <>
      <Section>
        <Container>
          <ContentWrapper>
            <h2>Shops:</h2>
            <ShopsList>
              {stores &&
                stores.map((store) => (
                  <ShopsListItem
                    store={store}
                    handleClick={selectStore}
                    key={store._id}
                  />
                ))}
            </ShopsList>
          </ContentWrapper>
          <ContentWrapper>
            <CardsGrid>
              {drugs &&
                filteredDrugs.map((drug) => (
                  <Card drug={drug} handleClick={addToCart} key={drug._id} />
                ))}
            </CardsGrid>
          </ContentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
