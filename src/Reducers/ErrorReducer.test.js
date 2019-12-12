import { HasErroredReducer } from './ErrorReducer'

describe('HasErroredReducer', () => {
  it('Should have a default state of an empty string', () => {
    const expected = '';
    const result = HasErroredReducer(undefined, {})

    expect( result ).toEqual( expected );
  })
  it('Should return the action.error when action.type is HAS_ERRORED', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      error: 'Error Message'
    }
    const expected = 'Error Message';
    const result = HasErroredReducer('', mockAction)

    expect( result ).toEqual( expected );
  })
})