import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme'

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpForm />)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have a state that includes all fields required for the form', () => {
    const mockState = {
      name: '',
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };

    const result = wrapper.state();

    expect(result).toEqual(mockState);
  });

  it('Should have a method for handling the change in input and setting the state', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'ryan'
      }
    }

    wrapper.instance().handleOnChange(mockEvent);

    const expectation = wrapper.state().name;
    const result = 'ryan';

    expect(expectation).toEqual(result);
  });

  it('Should return a form element', () => {
    expect(wrapper.name()).toEqual('form')
  });

  it('Should call the handleOnChange event when the name input changes', () => {
    const mockEvent = {
      target: {
        value: 'mock value'
      }
    };
    wrapper.instance().handleOnChange = jest.fn();

    wrapper.find('#signupform__input--name').simulate('change', mockEvent);

    expect(wrapper.instance().handleOnChange).toBeCalledWith(mockEvent);
  });

  it('Should call the handleOnChange event when the username input changes', () => {
    const mockEvent = {
      target: {
        value: 'mock value'
      }
    }
      wrapper.instance().handleOnChange = jest.fn();

    wrapper.find('#signupform__input--username').simulate('change', mockEvent);

    expect(wrapper.instance().handleOnChange).toBeCalledWith(mockEvent);
  })

  it('Should call the handleOnChange event when the email input changes', () => {
    const mockEvent = {
      target: {
        value: 'mock value'
      }
    }
      wrapper.instance().handleOnChange = jest.fn();

    wrapper.find('#signupform__input--email').simulate('change', mockEvent);

    expect(wrapper.instance().handleOnChange).toBeCalledWith(mockEvent);
  })
})