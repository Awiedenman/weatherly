import React from 'react';
import '../Styles/Welcome.css';
import Search from './Search';
 
const Welcome = (props) => {

  
  
  return (
    <div className="welcomePage">
     <h1>Welcome to Wicked Weather!!</h1>
     <Search updateStateFromSearch={props.updateStateFromSearch} />
    </div>
  )
}

export default Welcome;