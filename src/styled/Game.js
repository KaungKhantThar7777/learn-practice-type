import styled from "styled-components";

export const StyledGame = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
  grid-template-rows: 50px 1fr;
  grid-template-areas: "score . timer" "character character character";
  height: 75vh;
  max-height: 500px;
  padding: 20px;
`;

export const StyledScore = styled.p`
  grid-area: score;
  font-size: 1.5rem;
`;

export const StyledCharacter = styled.p`
  grid-area: character;
  font-size: 15rem;
  text-align: center;
  color: #e16365;
`;

export const StyledTimer = styled.p`
  grid-area: timer;
  font-size: 1.5rem;
`;
