import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Model } from "../pages/Model";

export const Router = memo(() => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/model">
          <Model />
        </Route>
      </Switch>
    </AnimatePresence>
  );
});
