import React, { useState, useEffect } from "react";
import {
  StyledHighScores,
  StyledScoresList,
  StyledScoresLi,
} from "../styled/HighScores";
import Spinner from "../components/Spinner";
import { StyledH1 } from "../styled/Home";

const HighScores = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    fetchHighScores();

    async function fetchHighScores() {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");

        const scores = await res.json();

        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  return (
    <StyledHighScores>
      {highScores.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <StyledH1>High Scores</StyledH1>
          <StyledScoresList>
            {highScores.map((score, index) => (
              <StyledScoresLi key={score.id}>
                <p>{index + 1} .</p>
                <p>{score.fields.name}</p> <span>-</span>{" "}
                <p>{score.fields.score}</p>
              </StyledScoresLi>
            ))}
          </StyledScoresList>
        </>
      )}
    </StyledHighScores>
  );
};

export default HighScores;
