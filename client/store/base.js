import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CARS = 'GET_CARS'
const GET_PARTS = 'GET_PARTS'
const UPDATE_CAR = 'UPDATE_CAR'
const POST_CAR = "POST_CAR";

/**
 * INITIAL STATE
 */
const initialState = {
    cars: [],
    parts: [],
    newCar: {}
}

/**
 * ACTION CREATORS
 */
const getCars = cars => ({type: GET_CARS, cars});
const getParts = parts => ({type: GET_PARTS, parts});
const postCar = newCar => ({ type: POST_CAR, newCar });
export const updateCar = newCar => ({type: UPDATE_CAR, newCar});

/**
 * THUNK CREATORS
 */
    export const getAllCars = () => dispatch => {
        axios
        .get('/api/cars')
        .then(res => res.data)
        .then((toDispatchCars) => {
            dispatch(getCars(toDispatchCars));
        });
    };
    export const getAllParts = () => dispatch => {
        axios
        .get('/api/parts')
        .then(res => res.data)
        .then((toDispatchParts) => {
            dispatch(getParts(toDispatchParts));
        });
    };
    export const writeCar = car => dispatch => {
        axios
          .post("/api/cars", {
            description: car.description,
            name: car.name,
            classtypeId: 1,
            parentId: car.parentId,
            views: car.views
          })
          .then(() => {
            dispatch(postCar(car));
          })
          .catch(err => console.error("Error", err));
      };


/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
    return Object.assign({}, state, { cars: action.cars });
    case GET_PARTS:
    return Object.assign({}, state, { parts: action.parts});
    case UPDATE_CAR:
    return Object.assign({}, state, { updateCar: action.newCar});
    case POST_CAR:{
        console.log("new car is" ,action.newCar)
        return Object.assign({}, state, {cars: state.cars.concat(action.newCar)});
    }
 
    default:
      return state
  }
}
