import { UserReducer } from './UserReducer'

describe('UserReducer', () => {
  it('Should return a default state of an empty object', () => {
    const expected = {};
    const result = UserReducer(undefined, {})

    expect( result ).toEqual( expected );
  })

  it('Should return the action.data when action.type is ADD_USER', () => {
    const mockAction = {
      type: 'ADD_USER',
      data: {
        name: 'ryan'
      }
    }
    const expected = {name: 'ryan'}
    const result = UserReducer({}, mockAction)

    expect( result ).toEqual( expected );
  })
})