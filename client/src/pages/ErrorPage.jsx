import styled from "@emotion/styled";
import { Link, useRouteError } from "react-router-dom";

const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ErrorHeader = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;

const ErrorText = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  text-decoration: underline;
  color: #0b44cd;
`;

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ErrorWrapper>
      <ErrorHeader>Oops!</ErrorHeader>
      <ErrorText>Sorry, an unexpected error has occurred.</ErrorText>
      <ErrorText>
        <i>{error.statusText || error.message}</i>
      </ErrorText>
      <StyledLink to="/">Go to the Shop Page</StyledLink>
    </ErrorWrapper>
  );
};

export default ErrorPage;
