import React from 'react';
import { connect } from 'react-redux'
import { GetUserEventThunk } from '../../Thunks/EventThunks/GetUserEventThunk'
import { GetInvitedEventsThunk } from '../../Thunks/EventThunks/GetInvitedEventsThunk';

export class EventsContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    const userEvent = await this.props.getUserEvent(this.props.apiKey);
    const allEvents = await this.props.getAllEvents(this.props.apiKey);
    console.log(userEvent);
    console.log(allEvents);
  }

  render() {
    return(
      <div></div>
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