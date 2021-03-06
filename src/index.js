import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScoreProvider } from "./contexts/ScoreContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="kkt.us.auth0.com"
      clientId="NCstOIv7Qu0Uk0ptSEu7VZeJI3LzozCl"
      redirectUri={window.location.origin}
      audience="https://learnpracticetype"
    >
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
