import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledNavBrand,
  StyledNavList,
  StyledNavLink,
  StyledNavLi,
  StyledNavButton,
  StyledToggleBtn,
} from "../styled/Navbar";
import { Accent } from "../styled/Utils";
import { useAuth0 } from "@auth0/auth0-react";
import { withTheme } from "styled-components";

const Navbar = ({ toggleTheme }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
          <StyledNavLi>
            <StyledNavButton onClick={() => loginWithRedirect()}>
              Login
            </StyledNavButton>
          </StyledNavLi>
        )}
        {isAuthenticated && (
          <StyledNavLi>
            <StyledNavButton
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </StyledNavButton>
          </StyledNavLi>
        )}

        <StyledNavLi>
          <StyledToggleBtn onClick={toggleTheme}>Toggle Theme</StyledToggleBtn>
        </StyledNavLi>
      </StyledNavList>
    </StyledNav>
  );
};

export default withTheme(Navbar);
