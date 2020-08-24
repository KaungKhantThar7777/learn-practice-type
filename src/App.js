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
import { useAuth0 } from "@auth0/auth0-react";
import { lightTheme, darkTheme } from "./styled/Themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = useAuth0();

  const [theme, toggleTheme] = useTheme();

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <Global />
        <Router>
          <Main>
            {loading && <Spinner />}
            {!loading && (
              <Container>
                <Navbar toggleTheme={toggleTheme} />
                <Switch>
                  <Route path="/game" component={Game} />
                  <Route path="/gameOver" component={GameOver} />
                  <Route path="/highScores" component={HighScores} />
                  <Route path="/" component={Home} />
                </Switch>
              </Container>
            )}
          </Main>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
