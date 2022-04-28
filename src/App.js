/** @format */

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
