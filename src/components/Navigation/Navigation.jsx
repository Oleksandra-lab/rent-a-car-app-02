import { NavLink } from "react-router-dom";
import { StyledNav, StyledUl } from "./Navigation.styled";


export const Navigation = () => {
    return (
      <StyledNav>
        <StyledUl>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </StyledUl>
      </StyledNav>
    );
  };

  export default Navigation;