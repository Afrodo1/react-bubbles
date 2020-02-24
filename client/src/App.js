import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
export const port = 5000;
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
