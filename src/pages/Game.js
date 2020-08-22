import React from "react";
import {
  StyledGame,
  StyledScore,
  StyledCharacter,
  StyledTimer,
} from "../styled/Game";
import { Strong } from "../styled/Utils";

const Game = () => {
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Timer: <Strong>00:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
