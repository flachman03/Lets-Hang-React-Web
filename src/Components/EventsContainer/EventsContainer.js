import React from 'react';
import { connect } from 'react-redux'
import { GetUserEventThunk } from '../../Thunks/EventThunks/GetUserEventThunk'

export class EventsContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    const userEvent = await this.props.getUserEvent();
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
  getUserEvent: ApiKey => dispatch(GetUserEventThunk(ApiKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);