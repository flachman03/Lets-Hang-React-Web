import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import EventsContainer from './Components/EventsContainer/EventsContainer'
import { Route } from "react-router-dom";
import "./App.css";
import CreateEvent  from "./Components/CreateEvent/CreateEvent";

function App() {
  return (
    <main>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/events" component={EventsContainer}/>
      <Route exact path="/createevent" component={CreateEvent}/>
    </main>
  );
}

export default App;
