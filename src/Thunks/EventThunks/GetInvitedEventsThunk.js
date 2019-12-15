import { hasErrored } from "../../Actions";
import { allInvitedEvents } from "../../Actions/EventActions";

export const GetInvitedEventsThunk = ApiKey => {
  const url = `https://localhost:5001/api/v1/event/user/allInvited?ApiKey=${ApiKey}`
  return async dispatch => {
    try {
      const response = await fetch(url);
      const events = response.json();
      dispatch(allInvitedEvents(events))
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}