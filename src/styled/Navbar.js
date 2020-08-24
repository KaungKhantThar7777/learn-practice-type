import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px 0;
  margin-bottom: 3rem;
`;

export const StyledNavBrand = styled.div`
  font-size: 1.5rem;

  a {
    text-decoration: none;
  }
`;

export const StyledNavList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  list-style: none;
  padding: 0;
`;

export const StyledNavLi = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  transition: color 200ms;
  margin-right: 1rem;
  &:hover {
    color: #e16365;
  }
`;
