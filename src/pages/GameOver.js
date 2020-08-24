import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledNavLink } from "../styled/Navbar";
import { StyledGameOver } from "../styled/GameOver";
import { StyledCharacter } from "../styled/Game";
import { StyledH1 } from "../styled/Home";
import { useAuth0 } from "@auth0/auth0-react";

const GameOver = ({ history }) => {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently();
        const options = {
          method: "POST",
          body: JSON.stringify({ name: "Camerron", score }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch("/.netlify/functions/saveHighScore", options);
        const data = await res.json();
        if (data.id) {
          setScoreMessage("Congrats! You got high scores");
        } else {
          setScoreMessage("Sorry, you did not get high scores. Keep tryping!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (isAuthenticated) saveHighScore();
    //eslint-disable-next-line
  }, [score, isAuthenticated]);
  if (score === -1) {
    history.push("/");
  }
  return (
    <StyledGameOver>
      <StyledH1>GameOver</StyledH1>
      <h2>{scoreMessage}</h2>
      {!isAuthenticated && (
        <h2>You should login or signup to compete for high scores</h2>
      )}
      <StyledCharacter>{score}</StyledCharacter>
      <div>
        <StyledNavLink to="/">Go Home</StyledNavLink>
        <StyledNavLink to="/game">Play Again?</StyledNavLink>
      </div>
    </StyledGameOver>
  );
};

export default GameOver;
