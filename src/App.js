import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ClockDisplay from './ClockDisplay.js'


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
componentWillUnmount(){

}

tick() {
    this.setState({
      date: new Date()
    });
  }

    render(){
        return(
            <div className = "App">
            <h1>Hello, world</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    
    //setInterval(App, 1000)
    
    
}

export default App;
