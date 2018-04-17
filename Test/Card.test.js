import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {
  let props;
  let wrapper;
  let hourObj = {
    key: 1200,
    hour: 1200,
    hourTemp: 37,
    hourIcon: null,
    hourCondition: 'Cloudy'
  };

  beforeEach(() => {
    props = { hourObj };
    wrapper = shallow(<Card {...props}/>);
  });

  it('should exist and render without crashing', () => {

    expect(wrapper).toBeDefined();
  });
});