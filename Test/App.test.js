import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should render the Welcome component', () => {

    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it(
    'should have a default state and specific dayArray default of empty array',
    () => {
      let expectedState = {
        citySt: localStorage.citySt,
        currCity: '',
        currState: '',
        currWeatherObj: {},
        hourArray: [],
        dayArray: [],
        toggleForecast: true
      }

      expect(wrapper.state()).toEqual(expectedState);
    });


  it('toggleForecast() updates state', () => {

    wrapper.setState({ toggleForecast : true });
    wrapper.instance().toggleForecast();

    expect(wrapper.state('toggleForecast')).toEqual(false)
  })

});
