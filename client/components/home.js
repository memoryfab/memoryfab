import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Slider from 'react-slick'



export class Home extends Component {
  render () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplayspeed:8000
  };
  return (
  <div>
    <div className="banner">
      <h2> New Posts By Category </h2>
      <Slider {...settings}>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
      <div> <img src='/images/NewCar.png' /></div>
    </Slider>
      {/*<img src='/images/NewCar.png'/>
      <img src='/images/NewCar.png' />
<img src='/images/NewCar.png' />*/}
    </div>
    <div className="categories">
      <img src='/images/NewCar.png' />
      <h2> Title Model </h2>
      <p> We're talking yet another set of 200+ amazing photos here! Everything that needed to be said about </p>
      <p> [parts tag][cars tag][show tags][location tag][author tag] </p>
      <img src='/images/NewCar.png' />
      <h2> Title Model </h2>
      <p> We're talking yet another set of 200+ amazing photos here! Everything that needed to be said about </p>
      <p> [parts tag][cars tag][show tags][location tag][author tag] </p>
      <img src='/images/NewCar.png' />
      <h2> Title Model </h2>
      <p> We're talking yet another set of 200+ amazing photos here! Everything that needed to be said about </p>
      <p> [parts tag][cars tag][show tags][location tag][author tag] </p>
    </div> 
    <div className="popular">
      <h2> CATEGORY </h2>
      <img src='/images/NewCar.png' width="100" height="100"/>
      <img src='/images/NewCar.png' width="100" height="100"/>
      <img src='/images/NewCar.png' width="100" height="100"/>
      <img src='/images/NewCar.png' width="100" height="100"/>
    </div>  
  </div>
)}
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
