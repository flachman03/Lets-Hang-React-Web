import { addUser } from '../../Actions/UserActions'
import { hasErrored } from '../../Actions'

export const LoginUserThunk = userInfo => {
  const url = 'https://localhost:5001/api/v1/user/login'
  return async dispatch => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      }
      const response = await fetch(url, options);
      const user = await response.json();
      console.log(user)
      dispatch(addUser(user))
      return user
    }
    catch(error) {
      dispatch(hasErrored(error))
    }
  }
}