import {  hasErrored,
          IsLoading } from './index'

describe('Index Actions', () => {
  describe('HasErrored Action', () => {
    it('Should have a type of HAS_ERRORED', () => {
      const expected = 'HAS_ERRORED';
      const result = hasErrored().type;

      expect(result).toEqual(expected);
    })

    it('Should return the error message passed in the parameter', () => {
      const expected = 'Error Message';
      const result = hasErrored('Error Message').error

      expect( result ).toEqual( expected )
    })
  })
  describe('IsLoading Action', () => {
    it('Should have a type of IS_LOADING', () => {
      const expected = 'IS_LOADING';
      const result = IsLoading().type;

      expect ( result ).toEqual( expected );
    })

    it('Should return loading booleand passed in the parameter', () => {
      const expected = true;
      const result = IsLoading(true).loading;

      expect( result ).toEqual( expected );
    })
  })
})