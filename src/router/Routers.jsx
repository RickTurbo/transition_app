import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/Home";
import { Model } from "../pages/Model";

export const Routers = memo(() => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/model">
                <Model />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
});
