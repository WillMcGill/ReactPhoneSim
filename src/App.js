import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './ClockDisplay.js'
import Timer from './Timer.js'


class App extends React.Component {

 
    render(){
        return(
            <div>
            <Clock />
            <Timer />
            </div>
        )
    }
    
   
    
    
}

export default App;
