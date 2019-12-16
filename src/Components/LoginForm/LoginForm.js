import React from "react";
import "./LoginForm.scss";
import { connect } from "react-redux";
import { LoginUserThunk } from "../../Thunks/UserThunks/LoginUserThunk";
import { NavLink, withRouter } from "react-router-dom";


export class LoginForm extends React.PureComponent {
  state = {
    userName: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginUser = async e => {
    e.preventDefault();
    const user = {
      Credentials: this.state.userName,
      Password: this.state.password
    };
    const checkUser = await this.props.LoginUser(user);
    console.log(checkUser)
    if (checkUser) {
      this.props.history.push('/events')
    }
  };

  render() {
    return (
      <main className="loginform-wrapper">
        <form className="loginform">
        <h1 className="lets-hang">Let's Hang</h1>
          <input
            className="loginform__input"
            id="loginform__input--username"
            type="text"
            name="userName"
            placeholder="Username"
            value={this.state.userName}
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
            onClick={e => this.handleLoginUser(e)}
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
  LoginUser: user => dispatch(LoginUserThunk(user))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
