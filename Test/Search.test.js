import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Search Component Test Suite', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      updateStateFromSearch: jest.fn(() => 'updateStateFromSearch')
    };
    wrapper = shallow(<Search {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('is a React component', ()=>{
    expect(wrapper).isElementOfType(
      Search, componentClass)
  })

  it('calls searchData when the enterKey is pressed',
  () => {
    // <input ref={(node) => this.textInput = node} />
    const input = this.search;
    node.value = 'Denver';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
  });
});