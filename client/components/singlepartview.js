import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getPart} from '../store'



export class SinglePartView extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const partId = this.props.match.params.partId;
        this.props.getPart(partId);
    }
    render () { 
        return (
            <div>
                {this.props.part && 
                this.props.part.id && 
                (<div key={this.props.part.id} >
                        <h2> Part Model: {this.props.part.name} </h2>
                        <p> Description: {this.props.part.description} </p>
                        <h5> Views: {this.props.part.views} </h5>
                </div>)
                
                }
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      part: state.base.part
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getPart(id){
        dispatch(getPart(id))
      }
    }
  }


export default connect(mapState, mapDispatch)(SinglePartView)

