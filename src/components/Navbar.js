import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNav,
  StyledNavBrand,
  StyledNavList,
  StyledNavLink,
} from "../styled/Navbar";
import { Accent } from "../styled/Utils";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavBrand>
        <Link to="/">
          Learn.Practice.<Accent>Type</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/highScores">High Scores</StyledNavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};

export default Navbar;
