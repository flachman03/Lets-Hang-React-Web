import React from 'react';

export class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
    return(
      <form>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleOnChange(e)}>
        </input>
      </form>
    )
  }
}