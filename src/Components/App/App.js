import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Header />
        <Movies />
      </>
    )
  }
}

export default App;
