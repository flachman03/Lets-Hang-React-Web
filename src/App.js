import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </main>
  );
}

export default App;
