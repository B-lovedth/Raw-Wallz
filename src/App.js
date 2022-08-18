import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
          <Route path='/sign-up'>
            <SignUp/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
