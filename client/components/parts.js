import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getAllParts, updatePart, writePart, getAllClassTypes, postUpdateGetParts} from '../store'



export class Parts extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.getParts();
        this.props.getClassTypes();
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
                  <form
                    onSubmit={e =>
                    this.props.onSubmit(this.props.newPart, e, this.props.classTypes)
                    }
                    id="partform"
                 >
                    <input
                    type="text"
                    placeholder="Enter a name"
                    name="name"
                    onChange={e => this.props.onChange(this.props.newPart, e)}
                    value={this.props.newPart.name}
                    />
                    <input
                    type="text"
                    placeholder="Enter a description"
                    name="body"
                    onChange={e => this.props.onChange(this.props.newPart, e)}
                    value={this.props.newPart.description}
                    />
                    {/*<h3>Category</h3>
                    <select
                    name="category"
                    onChange={e => this.props.onChange(this.props.newPart, e)}
                    value={this.props.newPart.category}
                    >
                    <option value="1">Car</option>
                    <option value="2">Part</option>
                    <option value="3">Other</option>
                    </select>*/}
                    <br />
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      parts: state.base.parts,
      classTypes: state.admin.classTypes,
      newPart: state.base.newPart
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getParts() {
        dispatch(getAllParts());
      },
      getClassTypes() {
        dispatch(getAllClassTypes());
      },
      onChange(thePart, e) {
        const updatedPart = thePart;
        if (e.target.getAttribute("name") === "name") {
            updatedPart.name = e.target.value;
        }
        if (e.target.getAttribute("name") === "body") {
            updatedPart.description = e.target.value;
        }
     /*   if (e.target.getAttribute("name") === "category") {
            updatedPart.category = e.target.value;
        }*/
  
        dispatch(updatePart(updatedPart));
      },
      onSubmit(thePart, e, theClassTypes) {
        e.preventDefault();
        thePart.category = "Parts"
        //Find the classType with "Parts" Enum and get it's id
        theClassTypes.forEach(singleClass => {
            if (singleClass.className === thePart.category){
                thePart.classtypeId = singleClass.id
            }
        })
        thePart.views = 0;
        thePart.parentId = 0;
        dispatch(postUpdateGetParts(thePart))
        document.getElementById("partform").reset();
      }
    }
  }


export default connect(mapState, mapDispatch)(Parts)

