import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledNavLink } from "../styled/Navbar";

const GameOver = ({ history }) => {
  const [score] = useScore();
  if (score === -1) {
    history.push("/");
  }
  return (
    <div>
      GameOver
      <p>{score}</p>
      <StyledNavLink to="/">Go Home</StyledNavLink>
      <StyledNavLink to="/game">Play Again?</StyledNavLink>
    </div>
  );
};

export default GameOver;
