import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather.js';//to check the 'hookup' - should render the CurrentWeather component

//1. default state
//2. whatever changes in state: test function changes state correctly (ex: removes, adds correctly)

//3. child component: default state
//4. state changes (inputs change correctly)
//5. props function is called with the correct arguments

//6. everything else is a ui(stateless and/orfunctional) - render correctly? you look right? ex: the card is rendered? that’s the ui test. button clicked to remove/change card? did you call with the correct arguments

// describe('App tests', () => {
//     describe('default state tests', () => {
//         it('App should have a default state of ''key'' and it should be 'default value'), ()=>{
//       const renderedApp = shallow(<App />);
//         const expect = 'default value';

//         expect(renederedApp.state('key')).toEqual(expect);
//     }
//   })
// })