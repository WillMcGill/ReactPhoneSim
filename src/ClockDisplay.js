import React from 'react';

class Clock extends React.Component{
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
    clearInterval(this.timerID);
}

tick() {
    this.setState({
      date: new Date()
    });
  }

    render(){
        return(
            <div className = "App">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            <h2>{this.state.date.toLocaleDateString()}</h2>
            </div>
        )
    }
    
   
    
    
}

export default Clock;








