import React from 'react'
import { connect } from 'react-redux';


export class CreateEvent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userId: null,
      title: '',
      description: '',
      eventTime: '',
      eventLocation: '',
      userName: '',
      invited: []
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const eventInfo = {
      userId: this.props.user.userId,
      title: this.state.title,
      description: this.state.description,
      eventTime: this.state.eventTime,
      eventLocation: this.state.eventLocation,
      userName: this.props.user.userName,
      invited: this.state.invited
    }
  }

  render() {
    return(
      <main>
        <form>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={this.state.title}
            onChange={ e => this.handleOnChange(e)}
            />
          <input
            type='text'
            placeholder='Event Description'
            name='description'
            value={this.state.description}
            onChange={ e => this.handleOnChange(e)}
            />
          <input
            type='text'
            placeholder='When is your event?'
            name='eventTime'
            value={this.state.eventTime}
            onChange={ e => this.handleOnChange(e)}
            />
          <input
            type='text'
            placeholder='Where is your event?'
            name='eventLocation'
            value={this.state.title}
            onChange={ e => this.handleOnChange(e)}
            />
          <button
            onClick={ e => this.handleSubmit(e)}
          >Create My Event!</button>
        </form>
        <ul>
          
        </ul>
      </main>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})

export default connect(mapStateToProps, null)(CreateEvent)