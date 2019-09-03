import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import History from "./pages/History";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import DailySpecials from "./pages/DailySpecials";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/lunch" component={Lunch} exact />
        <Route path="/dinner" component={Dinner} exact />
        <Route path="/daily_specials" component={DailySpecials} />
        <Route path="/beverages" component={Beverages} exact />
        <Route path="/history" component={History} exact />
      </div>
    </Router>
  );
}

export default App;
