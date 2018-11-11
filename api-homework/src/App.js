import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'
import MainContainer from './MainContainer/MainContainer'

class App extends Component {
constructor() {
  super();

  this.state = {
    logged: false,
    username: '',
    password: ''

  }
}

handleLogin = (username, loggedIn) => {
    this.setState({
      username: username,
      logged: loggedIn
    })
}


handleLogin = (username, isLoggedIn) => {
  console.log(username, isLoggedIn, ' in handleLogin');

  this.setState({
    username: username,
    logged: isLoggedIn
  })
}

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer /> : <Login handleLogin = {this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
