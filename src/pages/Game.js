import React, { useState, useEffect, useCallback } from "react";
import {
  StyledGame,
  StyledScore,
  StyledCharacter,
  StyledTimer,
} from "../styled/Game";
import { Strong } from "../styled/Utils";
import { useScore } from "../contexts/ScoreContext";

const Game = ({ history }) => {
  const MAX_SECONDS = 60;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [score, setScore] = useScore();

  const characters = "abcdefghijklmnopqrstuvwxyz123456789";

  // effect for starting timer
  useEffect(() => {
    setScore(0);
    setRandomCharacter();
    const startTime = new Date();
    const interval = setInterval(() => {
      updateTime(startTime);
    }, 1);
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  // effect for stoping timer
  useEffect(() => {
    if (seconds < 0) {
      history.push("/gameOver");
    }
  });

  const keyupHandler = useCallback(
    (e) => {
      if (currentCharacter === e.key) {
        setScore((score) => score + 1);
      } else if (score > 0) {
        setScore((score) => score - 1);
      }
      setRandomCharacter();
    }, //eslint-disable-next-line
    [currentCharacter]
  );
  //effect for registering eventListener
  useEffect(() => {
    document.addEventListener("keyup", keyupHandler);

    return () => document.removeEventListener("keyup", keyupHandler);
  }, [keyupHandler]);

  const setRandomCharacter = () => {
    const ran = Math.floor(Math.random() * characters.length);
    setCurrentCharacter(characters[ran]);
  };

  const updateTime = (startTime) => {
    const endTime = new Date();

    const passedMs = endTime.getTime() - startTime.getTime();
    setMs(1000 - (passedMs % 1000));

    const formatSeconds = Math.floor(seconds - passedMs / 1000);
    setSeconds(formatSeconds);
  };
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
      <StyledTimer>
        Timer:{" "}
        <Strong>
          {String(seconds).padStart(2, "0")}:{String(ms).padStart(3, "0")}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
