import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHr from '../lib/SevenHr';
import Card from '../lib/Card'

describe('SevenHr Component Test Suite', () => {

  let props;
  let wrapper;

  beforeEach(() => {
      const hourArray = [
        {
          key: 12,
          hour: 1200,
          hourTemp: 45,
          hourIcon: null,
          hourCondition: 'Partly Cloudy'
        },
        {
          key: 13,
          hour: 1300,
          hourTemp: 55,
          hourIcon: null,
          hourCondition: 'Sunny'
        },
        {
          key: 13,
          hour: 1300,
          hourTemp: 65,
          hourIcon: null,
          hourCondition: 'Rain'
        }]

      wrapper = shallow(<SevenHr hourArray={hourArray} />);
  });

  it('should exist and renders without crashing', () => {

    expect(wrapper).toBeDefined();
  });

  it('renders one Card component', () => {
    expect(wrapper.find(Card)).toHaveLength(3);
  });

});
