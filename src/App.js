// /*global React ReactDOM */
import React, { StrictMode, useState } from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { ThemeContext } from "./ThemeContext";

const SearchParam = loadable(() => import("./SearchParam"), { ssr: true });
// import { LazySearchParam } from './lazy';
const DetailsErrorBoundary = loadable(() => import("./Details"), { ssr: true });
// import { LazyDetails } from "./lazy";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <Switch>
          <Route exact path="/">
            <SearchParam fallback={<div>loading...</div>} />
          </Route>
          <Route
            path="/details/:id"
            render={({ match }) => (
              <DetailsErrorBoundary
                id={match.params.id}
                fallback={<div>...</div>}
              />
            )}
          />
        </Switch>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
