// /*global React ReactDOM */
import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { ThemeContext } from "./css/ThemeContext";
import { Hooks } from "./hooks";
import { SearchParam } from "./css/SearchParam";
import DetailsErrorBoundary from "./css/Details";
const App = () => {
  const theme = useState("darkBlue");
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Switch>
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route exact path="/css">
            <SearchParam />
          </Route>
          <Route
            path="/css/details/:id"
            render={({ match }) => (
              <DetailsErrorBoundary id={match.params.id} />
            )}
          />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
