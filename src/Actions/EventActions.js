export const userEvent = events => ({
  type: 'USER_EVENT',
  data: events
})

export const allInvitedEvents = events => ({
  type: 'ALL_EVENTS',
  data: events
})