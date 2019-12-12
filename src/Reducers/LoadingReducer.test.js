import { LoadingReducer } from './LoadingReducer'

describe('LoadingReducer', () => {
  it('Should return a default state of false', () => {
    const expected = false;
    const result = LoadingReducer(undefined, {})

    expect( result ).toEqual( expected );
  })

  it('Should return the action.loading when action.state is IS_LOADING', () => {
    const mockAction = {
      type: 'IS_LOADING',
      loading: true
    }
    const expected = true;
    const result = LoadingReducer(false, mockAction)

    expect( result ).toEqual( expected );
  })
})