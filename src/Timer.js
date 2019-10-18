import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        this.futureDate = {future: new Date('December 20, 2019 ')};
        this.elapsed = this.futureDate.future.getTime() - this.state.date.getTime()
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
      date: new Date(),
    //   elapsed: timeConversion(),
    },
    console.log(this.futureDate.future.getTime() - new Date().getTime()),
  //  this.timeConversion()
    );
  }
timeConversion(){
    let timeRemaining = this.futureDate.future.getTime() - this.state.date.getTime(); 
    
    let daysRemaining = Math.floor(timeRemaining / 86400000);
    let hoursRemaining = Math.floor(timeRemaining % 86400000 / 3600000);
    let minutesRemaining = Math.floor(timeRemaining % 3600000 / 60000);
    let secondsRemaining = Math.floor(timeRemaining% 60000 / 1000);
    
    const timeConcat = daysRemaining + " " + hoursRemaining + " " + minutesRemaining+ " " + secondsRemaining;
    return timeRemaining, daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining;
    
}
    render(){
        return(
            <div className = "App">
            <h3>Time Left</h3>
            <h1>{Number(this.futureDate.future.getTime()) - Number(this.state.date.getTime())}</h1>
            </div>
        )
    }
    
   
    
    
}

export default Timer;








