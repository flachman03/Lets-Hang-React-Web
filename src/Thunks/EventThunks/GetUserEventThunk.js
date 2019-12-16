import { userEvent } from '../../Actions/EventActions'
import { hasErrored} from '../../Actions/index'

export const GetUserEventThunk = ApiKey => {
  const url = `https://localhost:5001/api/v1/event/current?ApiKey=${ApiKey}`
  return async dispatch => {
    try {
      const response = await fetch(url);
      const event = await response.json();
      dispatch(userEvent(event));
      return event
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}