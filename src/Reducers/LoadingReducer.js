export const LoadingReducer = ( state = false, action ) => {
  switch ( action.type ) {
    case 'IS_LOADING':
      return action.loading;
    default: 
      return state
  }
}