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

  it('calls searchData when the enterKey is pressed',
    () => {
     let mockEvent = {
       preventDefault : jest.fn(),
       keyCode : 13,
       target : {
         value : 'Omaha, NE'
       }
     }
     wrapper.setState({ query : 'Omaha, NE' })
     wrapper.instance().searchData(mockEvent)

     expect(wrapper.state('query')).toEqual('');
    });

    it('useInputChanges() updates state', () => {
      let mockEvent = {
        target : {
        value : 'Omaha, NE'
        }
      }
      wrapper.setState({});
      wrapper.instance().userInputChanges(mockEvent);

      expect(wrapper.state('query')).toEqual('Omaha, NE')
    })
});
