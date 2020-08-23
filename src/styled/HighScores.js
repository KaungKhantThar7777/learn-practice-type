import styled from "styled-components";

export const StyledHighScores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledScoresList = styled.ol`
  padding: 20px;
  list-style-type: decimal;
`;

export const StyledScoresLi = styled.li`
  padding: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 50px 1fr 100px 1fr;
  gap: 10px;
`;
