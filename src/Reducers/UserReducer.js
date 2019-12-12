export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return action.data;
    default:
      return state;
  }
}