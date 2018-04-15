import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../lib/App.js';
import { shallow, mount } from 'enzyme';
// import CurrentWeather from '../lib/CurrentWeather.js';//to check the 'hookup' - should render the CurrentWeather component

//1. default state
//2. whatever changes in state: test function changes state correctly (ex: removes, adds correctly)

//3. child component: default state
//4. state changes (inputs change correctly)
//5. props function is called with the correct arguments

//6. everything else is a ui(stateless and/orfunctional) - render correctly? you look right? ex: the card is rendered? that’s the ui test. button clicked to remove/change card? did you call with the correct arguments

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


