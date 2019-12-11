import React from 'react';
import './SignUpForm.scss'


export default class SignUpForm extends React.Component {
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
  render(){
    return(
      <form className='signupform'>
        <input 
          className='signupform__input'
          id='signupform__input--name'
          type='text'
          name='name'
          placeholder='Firstname Lastname'
          value={this.state.name}
          onChange={(e) => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          id='signupform__input--username'
          type='text'
          name='userName'
          placeholder='User Name'
          value={this.state.userName}
          onChange={(e) => this.handleOnChange(e)}
        >
        </input>
        <input
          className='signupform__input'
          id='signupform__input--email'
          type='text'
          name='email'
          placeholder='Email eg. user@gmail.com'
          value={this.state.email}
          onChange={(e) => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          id='signupform__input--phonenumber'
          type='text'
          name='phoneNumber'
          placeholder='Phone Number eg. 3033333333'
          value={this.state.phoneNumber}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          id='signupform__input--password'
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          id='signupform__input--confirm'
          type='text'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={this.state.confirmPassword}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <button
          className='signupform__submitbtn'
          placeholder='Submit'
          type='submit'>
        </button>
      </form>
    )
  }
}