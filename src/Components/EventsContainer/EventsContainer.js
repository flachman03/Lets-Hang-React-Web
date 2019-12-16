import React from 'react';
import { connect } from 'react-redux'
import { GetUserEventThunk } from '../../Thunks/EventThunks/GetUserEventThunk'
import { GetInvitedEventsThunk } from '../../Thunks/EventThunks/GetInvitedEventsThunk';
import EventCard from '../EventCard/EventCard'

export class EventsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userEvent: {},
      allEvents: []
    }
  }

  async componentDidMount() {
    const userEvent = await this.props.getUserEvent(this.props.apiKey);
    const allEvents = await this.props.getAllEvents(this.props.apiKey);
    console.log(userEvent)
    this.setState({ userEvent });
    this.setState({ allEvents })
  }

  render() {
    return(
      <EventCard event={this.state.userEvent} />
    )
  }
}

export const mapStateToProps = store => ({
  apiKey: store.user.apiKey
});

export const mapDispatchToProps = dispatch => ({
  getUserEvent: ApiKey => dispatch(GetUserEventThunk(ApiKey)),
  getAllEvents: ApiKey => dispatch(GetInvitedEventsThunk(ApiKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);