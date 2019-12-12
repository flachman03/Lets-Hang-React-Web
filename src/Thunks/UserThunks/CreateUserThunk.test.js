import { CreateUserThunk } from './CreateUserThunk'

describe('CreateUserThunk', () => {
  let mockDispatch, mockResponse
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockResponse = {
      name: 'Ryan'
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('Should return a dispatch function', async () => {
    await CreateUserThunk()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled()
  })

  it('Happy Path: Should call the addUser action', async () => {
    const mockAction = {
      type: 'ADD_USER',
      data: mockResponse
    }

    await CreateUserThunk(mockResponse)(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('Sad Path: Should cal the hasErrored action', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.reject('User Not Found')
    })
    const mockAction = {
      type: 'HAS_ERRORED',
      error: TypeError("Cannot read property 'json' of undefined")
    }

    await CreateUserThunk()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
})