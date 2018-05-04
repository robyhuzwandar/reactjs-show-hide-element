import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <div className="App-intro">
          <br />
          <button onClick={this.toggleDiv}> Toggle Div </button>
          <br />
          <br />
          {this.state.show && <Box />}
        </div>
      </div>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div> Selamat Datang Guysss</div>
    );
  }
}

export default App;
