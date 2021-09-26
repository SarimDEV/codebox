import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/index";
import Form from "./pages/Form/index";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
