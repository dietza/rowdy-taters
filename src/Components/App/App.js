import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import movieData from '../../movieData'

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
