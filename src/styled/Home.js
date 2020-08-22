import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHome = styled.div`
  padding: 1rem;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4.2rem;
  margin-bottom: 2rem;
`;
export const CTA = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;
  display: block;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
