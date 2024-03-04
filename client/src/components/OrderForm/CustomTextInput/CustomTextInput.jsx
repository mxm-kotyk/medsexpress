import PropTypes from "prop-types";
import { useField } from "formik";
import {
  Input,
  InputWrapper,
  Label,
  ErrorMessage,
} from "./CustomTextInput.styled";

const CustomTextInput = (props) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;
  const showSuccess = meta.touched && !meta.error;

  const validationStatus = () => {
    if (showError) {
      return "validation-failed";
    }
    if (showSuccess) {
      return "validation-success";
    }
    return;
  };

  return (
    <InputWrapper>
      <Input {...field} {...props} className={validationStatus()} />
      <Label htmlFor={props.id || props.name}>{props.name}</Label>
      {showError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputWrapper>
  );
};

CustomTextInput.propTypes = {
  props: PropTypes.object,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomTextInput;
