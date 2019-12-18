import React from 'react'
import { connect } from 'react-redux';
import { getFriendsThunk } from '../../Thunks/FriendThunks/getFriendsThunk'
import 'uuidv4';
import { uuid } from 'uuidv4';


export class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      title: '',
      description: '',
      eventTime: '',
      eventLocation: '',
      userName: '',
      invited: [],
      friends: [],
    }
  }

  async componentDidMount() {
    if(this.props.user)
    {
      const friends = await this.props.getFriends(this.props.user.apiKey);
      this.setState({ friends, userId: this.props.user.userId } )
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleInviteFriend = id => {
    if(this.state.invited.includes(id)) {
      let filterInvited = this.state.invited.filter( InvitedId => InvitedId !== id)
      this.setState({invited: filterInvited})
    } else {
      this.setState({invited: [...this.state.invited, id]})
    }
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

  displayFriends = () => {
    let displayFriends = this.state.friends.map( friend => {
      return <li
              onClick={ e => this.handleInviteFriend(friend.userId)}
              key={uuid()}
              >{friend.name}</li>
    })
    return displayFriends
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
            value={this.state.eventLocation}
            onChange={ e => this.handleOnChange(e)}
            />
          <button
            onClick={ e => this.handleSubmit(e)}
          >Create My Event!</button>
        </form>
        <ul>
          {this.state.friends && this.displayFriends()}
        </ul>
      </main>
    )
  }
}

export const mapStateToProps = store => ({
  user: store.user
})

export const mapDispatchToProps = dispatch => ({
  getFriends: apiKey => dispatch(getFriendsThunk(apiKey))
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)