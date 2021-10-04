import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import VariableList from "./Components/VariableList";
import NavBar from "./Components/NavBar";
import VariableDescr from "./Components/VariableDescr";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="wrap">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/variables">
            <VariableList />
          </Route>
          <Route exact path="/variables/:name">
            <VariableDescr />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
