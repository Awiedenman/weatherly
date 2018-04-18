import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome Component Test Suite', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      updateStateFromSearch: jest.fn(() => 'updateStateFromSearch'),
    };
    wrapper = shallow(<Welcome {...props} />);
  });

  it('should exist and renders without crashing', () => {

    expect(wrapper).toBeDefined();
  });

  it('renders one h1 to Search component', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders one Welcome page div to Search component', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

});
