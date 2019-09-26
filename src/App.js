import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import History from "./pages/History";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import DailySpecials from "./pages/DailySpecials";
import Caterings from "./pages/Caterings";
import Social from "./pages/Social";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
