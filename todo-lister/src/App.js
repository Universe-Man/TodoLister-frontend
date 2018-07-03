import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ListContainer from './components/ListContainer'

class App extends Component {
  state = {
    loggedIn: false
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <Header loggedIn={this.state.loggedIn} logIn={this.logIn} logOut={this.logOut}/>
        <ListContainer />
      </div>
    );
  }
}

export default App;
