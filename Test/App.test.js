import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    
  })
  
  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  });

  it('should render the Welcome component', () => {

    expect(wrapper.find('Welcome').length).toEqual(1)  
  })

  it('initially should have a default state and specific dayArray default of empty array', () => {

    expect(wrapper.state()).toEqual({
      citySt: localStorage.citySt,
      currCity: '',
      currState: '',
      currWeatherObj: {},
      hourArray: [],
      dayArray: [],
      toggleForecast: true,
    })
    expect(wrapper.state().dayArray).toEqual(expect.arrayContaining([]))
  })

  // it('should call a method on mount', () => {
    
  // })


});