import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CARS = 'GET_CARS'
const GET_PARTS = 'GET_PARTS'

/**
 * INITIAL STATE
 */
const initialState = {
    cars: [],
    parts: []
}

/**
 * ACTION CREATORS
 */
const getCars = cars => ({type: GET_CARS, cars})
const getParts = parts => ({type: GET_PARTS, parts})

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


/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
    return Object.assign({}, state, { cars: action.cars });
    case GET_PARTS:
    return Object.assign({}, state, { parts: action.parts});
    default:
      return state
  }
}
