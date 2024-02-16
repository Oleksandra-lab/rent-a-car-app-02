import logo from "/car-rent-icon.svg";
import { StyledHeader, StyledLogo } from "./Header.styled";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <img src={logo} alt="Logo" width={50} />
        <p>Rent a car</p>
      </StyledLogo>

      <Navigation />
    </StyledHeader>
  );
};

export default Header;
