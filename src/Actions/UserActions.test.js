import { addUser } from './UserActions'

describe('User Actions', () => {
  describe('Add User Action', () => {
    it('Should return type of ADD_USER', () => {
      const expected = 'ADD_USER';
      const result = addUser().type

      expect( result ).toEqual( expected );
    })

    it('Should return the data of the user passed in the parameter', () => {
      const expected = {
        name: 'Ryan'
      }
      const result = addUser({name: 'Ryan'}).data

      expect( result ).toEqual( expected ); 
    })
  })
})