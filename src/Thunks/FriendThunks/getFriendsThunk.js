import { addFriends } from '../../Actions/FriendActions'
import { hasErrored } from '../../Actions';

export const getFriendsThunk = apiKey => {
  const url = `https://localhost:5001/api/v1/user/friends?ApiKey=${apiKey}`
  
  return async dispatch => {
    try {
      const response = await fetch(url);
      const friends = await response.json();
      dispatch(addFriends(friends));
      return friends  
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}