import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </Router>
  );
};

export default Routes;
