import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledNavLink } from "../styled/Navbar";
import { StyledGameOver } from "../styled/GameOver";
import { StyledCharacter } from "../styled/Game";

const GameOver = ({ history }) => {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");

  useEffect(() => {
    const saveHighScore = async () => {
      const options = {
        method: "POST",
        body: JSON.stringify({ name: "Camerron", score }),
      };
      const res = await fetch("/.netlify/functions/saveHighScore", options);
      const data = await res.json();
      if (data.id) {
        setScoreMessage("Congrats! You got high scores");
      } else {
        setScoreMessage("Sorry, you did not get high scores. Keep tryping!");
      }
      console.log(data);
    };

    saveHighScore();
    //eslint-disable-next-line
  }, []);
  if (score === -1) {
    history.push("/");
  }
  return (
    <StyledGameOver>
      <h1>GameOver</h1>
      <h2>Score: </h2>
      <StyledCharacter>{score}</StyledCharacter>
      <h2>{scoreMessage}</h2>
      <div>
        <StyledNavLink to="/">Go Home</StyledNavLink>
        <StyledNavLink to="/game">Play Again?</StyledNavLink>
      </div>
    </StyledGameOver>
  );
};

export default GameOver;
