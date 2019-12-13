import React from "react";
import "./LoginForm.scss";
import { connect } from "react-redux";
import { CreateUserThunk } from "../../Thunks/UserThunks/CreateUserThunk";
import { NavLink } from "react-router-dom";

export class LoginForm extends React.PureComponent {
  state = {
    userName: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleCreateUser = e => {
  //   e.preventDefault();
  //   const user = {
  //     name: this.state.name,
  //     userName: this.state.userName,
  //     email: this.state.email,
  //     phoneNumber: this.state.phoneNumber,
  //     password: this.state.password,
  //     confirmPassword: this.state.confirmPassword
  //   };
  //   this.props.createUser(user);
  // };

  render() {
    return (
      <main className="loginform-wrapper">
        <h1 className="lets-hang">Let's Hang</h1>
        <form className="loginform">
          <input
            className="loginform__input"
            id="loginform__input--username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="loginform__input"
            id="loginform__input--password"
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <button
            className="loginform__submitbtn"
            placeholder="Login"
            type="submit"
            onClick={e => this.handleCreateUser(e)}
          >
            Login
          </button>
          <h3 className="loginform__message">
            Don't have an account? <NavLink to="/signup" className="signup-link">Sign up here</NavLink>
          </h3>
        </form>
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(CreateUserThunk(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
