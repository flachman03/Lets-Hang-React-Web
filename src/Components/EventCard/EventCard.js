import React from 'react';

export const EventCard = ({event}) => {
    console.log(event)
    return(
      <article>
        <h3>{event.title}</h3>
        <h5>{event.creator}</h5>
        <p>{event.description}</p>
        <p>{event.eventTime}</p>
        <p>{event.eventLocation}</p>
      </article>
    )
}

export default EventCard;