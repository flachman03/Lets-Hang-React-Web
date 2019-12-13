import { LoginUserThunk } from './LoginUserThunk'

describe('LoginUserThunk', () => {
  let mockDispatch, mockResponse
  beforeEach(() => {
    mockDispatch = jest.fn()
    mockResponse = {
      title: 'Hang at Pub'
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('Should return a dispatch function', async () => {
    await LoginUserThunk()(mockDispatch)

    expect(mockDispatch).toHaveBeenCalled();
  })

  it('Happy Path: Should call the addUser action', async () => {
    const mockAction = {
      type: 'ADD_USER',
      data: mockResponse
    }

    await LoginUserThunk(mockResponse)(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('Sad Path: Should call the hasErrored action', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.reject(new Error('User Not Found'))
              .catch(error => error)
    })
    const mockAction = {
      type: 'HAS_ERRORED',
      error: TypeError("Cannot read property 'json' of undefined")
    }

    await LoginUserThunk()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })
})