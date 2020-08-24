import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledNavBrand,
  StyledNavList,
  StyledNavLink,
  StyledNavLi,
} from "../styled/Navbar";
import { Accent } from "../styled/Utils";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(isAuthenticated, user);
  return (
    <StyledNav>
      <StyledNavBrand>
        <Link to="/">
          Learn.Practice.<Accent>Type</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavList>
        <StyledNavLi>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavLink to="/highScores">High Scores</StyledNavLink>
        </StyledNavLi>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
        {isAuthenticated && (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        )}
      </StyledNavList>
    </StyledNav>
  );
};

export default Navbar;
