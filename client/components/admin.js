import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getAllClassTypes, updateClassType, writeClassType} from '../store'



export class Admin extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getClassTypes();
    }
    render () { 
        return (
            <div>
                {this.props.classTypes && 
                this.props.classTypes.map(classType => (
                    classType.id && (<div key={classType.id} >
                        <h2> Class Type: {classType.className} </h2>
                    </div>)
                ))
                }
                 <form
                    onSubmit={e =>
                    this.props.onSubmit(this.props.newClassType, e)
                    }
                    id="classtypeform"
                 >
                    <select
                    name="className"
                    onChange={e => this.props.onChange(this.props.newClassType, e)}
                    value={this.props.newClassType.className}
                    >
                    <option value="Car">Car</option>
                    <option value="Parts">Parts</option>
                    <option value="Show">Show</option>
                    <option value="Article">Article</option>
                    </select>
                    <br />
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      classTypes: state.admin.classTypes,
      newClassType: state.admin.newClassType,
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getClassTypes() {
        dispatch(getAllClassTypes());
      },
      onChange(theClassType, e) {
        const updatedClassType = theClassType;
        if (e.target.getAttribute("name") === "className") {
            updatedClassType.className = e.target.value;
        }
  
        dispatch(updateClassType(updatedClassType));
      },
      onSubmit(theClassType, e) {
        e.preventDefault();
        let promisePostClassType = () => {
            return new Promise(function(resolve,reject){
                dispatch(writeClassType(theClassType))
                resolve();
            })
        }
        let promiseUpdateClassType = () => {
            return new Promise(function(resolve,reject){
                dispatch(updateClassType({}))
                resolve();
            })
        }
        let promiseGetAllClassTypes = () => {
            return new Promise(function(resolve,reject){
                dispatch(getAllClassTypes())
                resolve();
            })
        }
        promisePostClassType().then(() => promiseUpdateClassType()).then(() => promiseGetAllClassTypes());
        document.getElementById("classtypeform").reset();
      }
    }
  }


export default connect(mapState, mapDispatch)(Admin)

