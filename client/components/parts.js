import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getAllParts} from '../store'



export class Parts extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getParts();
    }
    render () { 
        return (
            <div>
                {this.props.parts && 
                this.props.parts.map(part => (
                    <div key={part.id} >
                        <h2> Part Model: {part.name} </h2>
                        <p> Description: {part.description} </p>
                        <h5> Views: {part.views} </h5>
                    </div>
                ))
                }
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      parts: state.base.parts
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getParts() {
        dispatch(getAllParts());
      }
    }
  }


export default connect(mapState, mapDispatch)(Parts)

