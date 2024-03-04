import { Formik } from "formik";
import { formValidationSchema } from "../../helpers/formValidationSchema";
import CustomTextInput from "./CustomTextInput";
import { StyledForm, StyledSubmitButton, TotalPrice } from "./OrderForm.styled";
import { useSelector } from "react-redux";
import { getOrderItems } from "../../redux/selectors";
import { useSubmitOrderMutation } from "../../redux/api";
import { Notify } from "notiflix";
import Loader from "components/Loader";

const OrderForm = () => {
  const initialValues = { name: "", email: "", phone: "", address: "" };
  const orderItems = useSelector(getOrderItems);
  const [submitOrder, { error, isLoading }] = useSubmitOrderMutation();

  const handleSubmit = async (values) => {
    const payload = { ...values, items: orderItems };
    await submitOrder({ payload });

    if (error) {
      Notify.failure("Ooops. An error occurred. Try reloading the page.", {
        position: "center-top",
      });
    }
    if (!error && !isLoading) {
      Notify.success("Your order was submitted!", {
        position: "center-top",
      });
    }
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formValidationSchema}
      >
        {({ isValid, dirty, values }) => (
          <StyledForm>
            {Object.keys(values).map((value) => {
              return (
                <CustomTextInput
                  key={value}
                  name={value}
                  id={value}
                  required
                  placeholder="."
                />
              );
            })}
            <StyledSubmitButton
              type="submit"
              disabled={!(isValid && dirty) || orderItems.length < 1}
            >
              Submit{" "}
            </StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
      {totalPrice > 0 && (
        <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default OrderForm;
