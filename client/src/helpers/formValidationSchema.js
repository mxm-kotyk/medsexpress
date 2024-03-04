import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
      "Doesn't look like a valid email."
    )
    .required("Please enter your email address"),
  phone: Yup.string().required("Please enter your phone"),
  address: Yup.string().required("Please enter your address"),
});
