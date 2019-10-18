import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './ClockDisplay.js'
import Timer from './Timer.js'


class App extends React.Component {

 
    render(){
        return(
            <div>
                <h1>Clock</h1>
            <Clock />
            <h1>Timer in Milliseconds</h1>
            <Timer />
            </div>
        )
    }
    
   
    
    
}

export default App;
