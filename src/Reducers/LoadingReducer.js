export const LoadingReducer = ( state = false, action ) => {
  switch ( action.type ) {
    case 'IS_LOADING':
      return state.loading;
    default: 
      return state
  }
}