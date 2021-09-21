// /*global React ReactDOM */
import React, { StrictMode, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

//const SearchParam = loadable(() => import("./SearchParam"), { ssr: true });
import SearchParam from './SearchParam';
//const DetailsErrorBoundary = loadable(() => import("./Details"), { ssr: true });
// import { LazyDetails } from "./lazy";
import DetailsErrorBoundary from "./Details";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <Switch>
          <Route exact path="/">
            <SearchParam />
          </Route>
          <Route
            path="/details/:id"
            render={({ match }) => (
              <DetailsErrorBoundary id={match.params.id}
              />
            )}
          />
        </Switch>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
