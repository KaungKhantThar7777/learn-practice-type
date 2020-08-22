import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledNavBrand, StyledNavList } from "../styled/Navbar";
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/highScores">High Scores</Link>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};

export default Navbar;
