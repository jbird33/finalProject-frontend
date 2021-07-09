import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import FindHero from "./components/FindHero";
import Teams from "./components/Teams";


function App() {
  return (
    <div className="App">

      <Route path="/" exact render={() => <Home /> } />

      <Route path="/about" render={() => <About /> } />
      <Route path="/login" render={(props) => <Login {...props} /> } />
      <Route path="/signup" render={(props) => <SignUp {...props} /> } />

      <Route path="/profile/:id" render={(props) => <Profile {...props}/> } />

      {/* <Route path="/findhero" exact render={(props) => <FindHero {...props} /> } /> */}
      
      <Route path="/findhero/:id" exact render={(props) => <FindHero {...props} /> } />

      <Route path="/teams" render={(props) => <Teams {...props} /> } />
 
    </div>
  );
}

export default App;
