import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerStart: 0
    }
  }
  seconds = () => {
    return ('0' + this.state.timerStart * 100).slice(-2);
  }
  mintues = () => {
    return ('0' + parseInt(this.state.timerStart % 60)).slice(-2);
  }
  hours = () => {
    return ('0' + Math.floor(this.state.timerStart / 60)).slice(-2);
  }
  handleReset = () => {
    this.setState({
      timerStart: 0,
    });

  };
  pauseTimer = () => {
    clearInterval(this.timer);
  }

  startTimer = () => {

    this.timer = setInterval(() => {
      this.setState({
        timerStart: (this.state.timerStart + 0.01)
      });
    }, 10);

  }

  render() {
    return (
      <div>
        <h1> {'HH : MM : SS'}</h1>
        {this.hours()}:{this.mintues()}:{this.seconds()}<br />
        <button type="button" onClick={this.startTimer}>Start</button>
        <button type="button" onClick={this.pauseTimer}>Stop</button>
        <button type="button" onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

export default App;
