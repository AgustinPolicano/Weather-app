import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstEntryHome from "./components/index"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WeatherStatus from './components/weatherStatus/weatherStatus';


function App() {
  return (
    <Router>
      <Routes >
        <Route path="/weather" element={<WeatherStatus />}>
        </Route>
        <Route path="/users">

        </Route>
        <Route path="/" element={<FirstEntryHome />}>
        </Route>
      </Routes >
    </Router>
  );
}

export default App;
