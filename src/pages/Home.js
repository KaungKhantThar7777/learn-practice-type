import React, { useEffect } from "react";

import { CTA, StyledHome, StyledH1 } from "../styled/Home";
import { Accent } from "../styled/Utils";
const Home = ({ history }) => {
  useEffect(() => {
    const handleKeyup = (e) => {
      if (e.key === "s") {
        history.push("/game");
      }
    };
    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
    //eslint-disable-next-line
  }, []);
  return (
    <StyledHome>
      <StyledH1>Ready to Type?</StyledH1>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </StyledHome>
  );
};

export default Home;
