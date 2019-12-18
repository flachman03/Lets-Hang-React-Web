import React from 'react';
import './SignUpForm.scss'
import { connect } from 'react-redux'
import {CreateUserThunk} from '../../Thunks/UserThunks/CreateUserThunk'
import { withRouter } from 'react-router-dom'


export class SignUpForm extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: '',
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCreateUser = async (e) => {
    e.preventDefault()
    const user = {
      name: this.state.name,
      userName: this.state.userName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    const checkUser = await this.props.createUser(user)
    if(checkUser) {
      this.props.history.push('/onboarding')
    }
  }
  render(){
    return (
      <main className="signupform-wrapper">
        <section className="signupform-message-section">
          <h2 className="signup-message">Sign up so you can hang out.</h2>
        </section>
        <form className="signupform">
          <input
            className="signupform__input"
            id="signupform__input--name"
            type="text"
            name="name"
            placeholder="Full name"
            value={this.state.name}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="signupform__input"
            id="signupform__input--username"
            type="text"
            name="userName"
            placeholder="User Name"
            value={this.state.userName}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="signupform__input"
            id="signupform__input--email"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="signupform__input"
            id="signupform__input--phonenumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={this.state.phoneNumber}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="signupform__input"
            id="signupform__input--password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <input
            className="signupform__input"
            id="signupform__input--confirm"
            type="text"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={e => this.handleOnChange(e)}
          ></input>
          <button
            className="signupform__submitbtn"
            placeholder="Submit"
            type="submit"
            onClick={e => this.handleCreateUser(e)}
          >Sign up</button>
        </form>
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  createUser: (user) => dispatch(CreateUserThunk(user))
});

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));