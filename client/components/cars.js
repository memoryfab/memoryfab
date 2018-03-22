import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, getAllCars, updateCar, writeCar, getAllClassTypes, postUpdateGetCars} from '../store'



export class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        }
    }
    
    componentDidMount() {
        this.props.getCars();
        this.props.getClassTypes();
    }

    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }


    render () { 
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div>
                {this.props.cars && 
                this.props.cars.map(car => (
                    car.id && (<div key={car.id} >
                        <h2> Car Model: {car.name} </h2>
                        <p> Description: {car.description} </p>
                        <h5> Views: {car.views} </h5>
                    </div>)
                ))
                }
                 <form
                    onSubmit={e =>
                    this.props.onSubmit(this.props.newCar, e, this.props.classTypes, this.state.file)
                    }
                    id="carform"
                 >
                    <input
                    type="text"
                    placeholder="Enter a name"
                    name="name"
                    onChange={e => {this.props.onChange(this.props.newCar, e)}}
                    value={this.props.newCar.name}
                    />
                    <input
                    type="text"
                    placeholder="Enter a description"
                    name="body"
                    onChange={e => this.props.onChange(this.props.newCar, e)}
                    value={this.props.newCar.description}
                    />
                    <input
                    type="file" 
                    name="file"
                    onChange={e => this.handleImageChange(e)} 
                    />
                   {/*  <h3>Category</h3>
                    <select
                    name="category"
                    onChange={e => this.props.onChange(this.props.newCar, e)}
                    value={this.props.newCar.category}
                    >
                   <option value="1">Car</option>
                    <option value="2">Part</option>
                <option value="3">Other</option>
                    </select>*/}
                    <br />
                    <button type="Submit">Submit</button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )}
}


const mapState = state => {
    return {
      isLoggedIn: !!state.user.id,
      cars: state.base.cars,
      classTypes: state.admin.classTypes,
      newCar: state.base.newCar
    }
  }
  
  const mapDispatch = dispatch => {
    return {
      handleClick() {
        dispatch(logout())
      },
      getCars() {
        dispatch(getAllCars());
      },
      getClassTypes() {
        dispatch(getAllClassTypes());
      },
      onChange(theCar, e) {
        const updatedCar = theCar;
        if (e.target.getAttribute("name") === "name") {
            updatedCar.name = e.target.value;
        }
        if (e.target.getAttribute("name") === "body") {
            updatedCar.description = e.target.value;
        }
      /*  if (e.target.getAttribute("name") === "category") {
            updatedCar.category = e.target.value;
        }*/
  
        dispatch(updateCar(updatedCar));
      },
      onSubmit(theCar, e, theClassTypes, theFile) {
        e.preventDefault();
        //Do something with theFile here
        theCar.category = "Car"
        //Find the classType with "Car" Enum and get it's id
        theClassTypes.forEach(singleClass => {
            if (singleClass.className === theCar.category){
                theCar.classtypeId = singleClass.id
            }
        })
        theCar.views = 0;
        theCar.parentId = 0;
       /* dispatch(writeCar(theCar));
        dispatch(updateCar({}));
        dispatch(getAllCars());*/
        dispatch(postUpdateGetCars(theCar))
        document.getElementById("carform").reset();
      }
    }
  }


export default connect(mapState, mapDispatch)(Cars)

