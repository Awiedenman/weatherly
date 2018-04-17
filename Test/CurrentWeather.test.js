import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

describe('CurrentWeather', () => {
  let props;
  let wrapper;
  let currentWeatherObj = { 
    currCity: 'Peoria',
    currState: 'IL',
    currTemp: 75,
    currExpectHigh: 80,
    currExpectLow: 40,
    currDate: 15,
    currWeatherDescrip: 'Sunny',
    currWeatherIcon: null,
    currWeatherSummary: 'Clear all day'
  }
  
  beforeEach(() => {
    props = {currentWeatherObj: currentWeatherObj};

    wrapper = shallow(<CurrentWeather { ...props } />);
  });

  it('should exist and render without crashing', () => {

    expect(wrapper).toBeDefined();
  });

  it('renders as it should', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
