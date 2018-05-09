import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './routes/signup'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/signup" component={Signup}/>
        {/* <Route exact path="/signup/response" component={SignupResponse}/> */}
      </Router>
    );
  }
}

export default App;
