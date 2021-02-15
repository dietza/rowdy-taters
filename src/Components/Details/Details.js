import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieVideos } from '../../apiCalls'
import PropTypes from 'prop-types';
import DetailsDisplay from '../DetailsDisplay/DetailsDisplay'
import backArrow from '../../double-left-arrows.svg'
import tater from '../../rowdytater1.png'
import './Details.css'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovieID: props.selectedMovieID,
      movieToDisplay: {},
      isLoading: true,
      error: "",
      trailersToDisplay: []
    }
  }

  componentDidMount() {
    fetchMovieDetails(this.state.selectedMovieID)
      .then(movie => {
        this.setState({ movieToDisplay: movie.movie, isLoading: false })
        this.findVideos()
      })
      .catch(error => this.setState({ error: "These taters got too rowdy - check back later!"}))
  }

  findVideos = () => {
    fetchMovieVideos(this.state.selectedMovieID)
      .then(trailers => this.setState({ trailersToDisplay: trailers.videos }))
      .catch(error =>  this.setState({error: "These taters got too rowdy - check back later!"}) )
  }  

  clearID = () => {
    this.props.hideSelection(null)
  }
  
  render() {
    return (
      <section className='details__details-view'>
        <Link to='/' className='return-to-home-view-btn'>
          <button className='return-to-home-view-btn' onClick={this.clearID}>
          <img src={backArrow} alt='back arrow icon' className='details__back-arrow'/>
          {'All Movies'}
          </button>
        </Link>

        {this.state.error !== "" && 
        <>
          <h2>{this.state.error}</h2>
          <img src={tater} alt="Angry Potato Icon"/>
        </>}

        {this.state.isLoading && this.state.error === "" && 
        <h1>Loading...</h1>}

        {!this.state.isLoading && 
        <DetailsDisplay movieToDisplay={this.state.movieToDisplay} trailersToDisplay={this.state.trailersToDisplay}/>}
      </section>
    )
  }
}

Details.propTypes = {
  selectedMovieID: PropTypes.string.isRequired,
  hideSelection: PropTypes.func.isRequired
}
export default Details