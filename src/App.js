/** @format */

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HeroSection/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
