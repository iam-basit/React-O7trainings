import React, { Fragment } from 'react';
import './App.css';
import Child from './Child';
import Counter from './Counter';
function App() {
  var friends=["nancy","jasleen","anikita","mridul","prabhjot","basit"]
  return (
    <Fragment>
        <h1 className='my-h1'>Hello friends</h1>
        <Counter/>
        {/* {friends.map(
          (el,index,array)=>{
            return(
              <React.Fragment key={index}>
                <h1>{el} {index+1}</h1>
                <p>This is para</p>
                {array}
              </React.Fragment>
            )
          }
        )} */}
{/* 
  <React.Fragment></React.Fragment> (import React from "react")
  <Fragment></Fragment> (import {Fragment} from "react")
  <></> 
*/}
    </Fragment>
    
  );
}

export default App;
