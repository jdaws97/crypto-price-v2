import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useHomeHook } from "./Components/Hooks/useHomeHook";

//Import App Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Searchresult from "./Components/Searchresult";
import Stacksdata from "./Components/Stacksdata";

function App() {
  useEffect(() => {
    Stacksdata();
  }, []);
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={`/results/:searchresult`} component={Searchresult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
