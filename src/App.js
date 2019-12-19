import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import NavBar from "./Components/NavBar/NavBar";
import EventsContainer from "./Components/EventsContainer/EventsContainer";
import { Route } from "react-router-dom";
import "./App.css";
import CreateEvent  from "./Components/CreateEvent/CreateEvent";

function App() {
  return (
    <main>
      <div>
        <Route path="/" component={NavBar} />
      </div>
      <section>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/events" component={EventsContainer} />
      </section>
    </main>
  );
}

export default App;
