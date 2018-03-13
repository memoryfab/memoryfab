import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getAllCars} from '../store'



export class Cars extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getCars();
    }
    render () { 
        return (
            <div>
                {this.props.cars && 
                this.props.cars.map(car => (
                    <div key={car.id} >
                        <h2> Car Model: {car.name} </h2>
                        <p> Description: {car.description} </p>
                        <h5> Views: {car.views} </h5>
                    </div>
                ))
                }
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      cars: state.base.cars
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getCars() {
        dispatch(getAllCars());
      }
    }
  }


export default connect(mapState, mapDispatch)(Cars)

