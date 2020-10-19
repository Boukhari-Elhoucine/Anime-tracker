import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimeList from "./Components/List/AnimeList";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import Profile from "./Components/Profile";
import { requests } from "./Components/requests";
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTopAiring);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Nav setSelectedOption={setSelectedOption} />
            <AnimeList
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
