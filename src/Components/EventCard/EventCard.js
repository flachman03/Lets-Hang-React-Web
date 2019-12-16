import React from 'react';

export class EventCard extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <article>
        <h3>{this.props.event.title}</h3>
        <h5>{this.props.creator}</h5>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.eventTime}</p>
        <p>{this.props.event.eventLocation}</p>
      </article>
    )
  }
}

export default EventCard;