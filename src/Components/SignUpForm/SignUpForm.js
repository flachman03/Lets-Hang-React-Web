import React from 'react';

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
      <form className='signupform__header'>
        <input 
          className='signupform__input'
          type='text'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          type='text'
          name='userName'
          value={this.state.userName}
          onChange={(e) => this.handleOnChange(e)}
        >
        </input>
        <input
          className='signupform__input'
          type='text'
          name='email'
          value={this.state.email}
          onChange={(e) => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          type='text'
          name='phoneNumber'
          value={this.state.phoneNumber}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          type='text'
          name='password'
          value={this.state.password}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <input
          className='signupform__input'
          type='text'
          name='confirmPassword'
          value={this.state.confirmPassword}
          onChange={ e => this.handleOnChange(e)}>
        </input>
        <button
          className='signupform__submitbtn'
          type='submit'>
        </button>
      </form>
    )
  }
}