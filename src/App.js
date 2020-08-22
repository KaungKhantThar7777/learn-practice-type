import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import Global from "./styled/Global";

function App() {
  return (
    <div className="App">
      <Global />
      <Router>
        <Main>
          <Container>
            <Navbar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/highScores" component={HighScores} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </Main>
      </Router>
    </div>
  );
}

export default App;
