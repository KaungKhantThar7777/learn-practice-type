import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledGame,
  StyledScore,
  StyledCharacter,
  StyledTimer,
} from "../styled/Game";
import { Strong } from "../styled/Utils";

const Game = () => {
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  const history = useHistory();
  useEffect(() => {
    const startTime = new Date();
    const interval = setInterval(() => {
      updateTime(startTime);
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      history.push("/gameOver");
    }
  });
  const updateTime = (startTime) => {
    const endTime = new Date();

    const passedMs = endTime.getTime() - startTime.getTime();
    setMs(1000 - (passedMs % 1000));
    console.log(passedMs);
    const formatSeconds = Math.floor(seconds - passedMs / 1000);
    setSeconds(formatSeconds);
    // console.log(formatSeconds);
  };
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
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
