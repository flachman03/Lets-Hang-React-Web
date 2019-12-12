export const HasErroredReducer = ( state = '', action ) => {
  switch ( action.type ) {
    case 'HAS_ERRORED':
      return action.error;
    default:
      return state;
  }
}