import {
  HeaderContainer,
  Logo,
  NavList,
  StyledHeader,
  StyledNavLink,
} from "./AppBar.styled";

const AppBar = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo to="/">
          <span>Meds</span>Express
        </Logo>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/">Shop</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cart">Shopping Cart</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default AppBar;
