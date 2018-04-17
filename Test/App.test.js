import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';


describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('App should have a default state ', ()=>{
        
    const expectDefaultState = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };
  
    expect(renderedApp.state()).toEqual(expectDefaultState);
  });
  
});


//   it('Should render the Search component', () => {

//     wrapper = mount(<App />)
//     expect(wrapper.find('Search').length).toEqual(1);
//   });

//   it('Should render the Welcome component', () => {
//     localStorage.clear();
//     expect(wrapper.find('Welcome').length).toEqual(1);
//   });


//   it('should test a conditional before mount', () => {
//     wrapper = mount(<App />)
//     wrapper.debug()

//     expect(wrapper.state()).toEqual({
//         tenDayToggle: true, 
//         city: undefined, 
//         errorPresent: false
//       });
//   })

//   it('should run getWeatherData when enter is pressed', () => {
//     wrapper = mount(<App />);
//     wrapper.instance().getWeatherData = jest.fn();

//     wrapper.find('input').simulate('keyDown', {keyCode: 13});
//     expect(wrapper.instance().getWeatherData).toHaveBeenCalled();
//   })


