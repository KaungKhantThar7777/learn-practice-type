import React from "react";

import { CTA, StyledHome, StyledH1 } from "../styled/Home";
import { Accent } from "../styled/Utils";

const Home = () => {
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
