import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';

describe('TenDay Component Test Suite', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      dayArray: [
        {
          key: 10,
          weekday: 'Monday',
          month: 'April',
          day: 1,
          high: 75,
          low: 43,
          conditions: 'Cloudy',
          icon: null
        },
        {
          key: 11,
          weekday: 'Tuesday',
          month: 'April',
          day: 2,
          high: 85,
          low: 53,
          conditions: 'Sunny',
          icon: null
        },
        {
          key: 12,
          weekday: 'Wednesday',
          month: 'April',
          day: 3,
          high: 95,
          low: 63,
          conditions: 'Rain',
          icon: null
        }]
    },

      wrapper = shallow(<TenDay {...props} />);
  });

  it('should exist and renders without crashing', () => {

    expect(wrapper).toBeDefined();
  });

  it('', ()=>{
    expect(wrapper.find('.tenDayContainer').length).toEqual(1)
  })

  it('renders one Card component', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
  });

});
