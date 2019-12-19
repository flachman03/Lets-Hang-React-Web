import { userEvent } from "../../Actions/EventActions";
import { hasErrored } from "../../Actions";

export const CreateEventThunk = (event, userId) => {
  const url = `https://localhost:5001/api/v1/event/${userId}`
  return async dispatch => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      }
      const response = await fetch(url, options);
      const newEvent = await response.json();
      dispatch(userEvent(newEvent));
      return event
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}