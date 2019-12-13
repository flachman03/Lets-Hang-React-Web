import React from "react";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <main>
      <header className="header">
        <h1 className="lets-hang">Let's Hang</h1>
      </header>
      <LoginForm />
      {/* <SignUpForm /> */}
    </main>
  );
}

export default App;
