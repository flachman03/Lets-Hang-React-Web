import { GetUserEventThunk } from './GetUserEventThunk'

describe('GetUserEventThunk', () => {
  let mockDispatch, mockResponse
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockResponse = {
      title: 'Hang at pub'
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('Should return a dispatch function', async () => {
    await GetUserEventThunk()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();
  })

  it('Happy Path: Should call the userEvent action', async () => {
    const mockAction = {
      type: 'USER_EVENT',
      data: mockResponse
    }

    await GetUserEventThunk(mockResponse)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('Sad Path: Should call the hasErrored action', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('Event Not Found'))
                    .catch(error => error)
    })
    const mockAction = {
      type: 'HAS_ERRORED',
      error: TypeError("response.json is not a function")
    }

    await GetUserEventThunk()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction)
  })
})