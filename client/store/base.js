import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CARS = 'GET_CARS'
const GET_PARTS = 'GET_PARTS'
const UPDATE_CAR = 'UPDATE_CAR'
const UPDATE_PART = 'UPDATE_PART'
const POST_CAR = 'POST_CAR';
const POST_PART = 'POST_PART';
const GET_CAR = 'GET_CAR'
const GET_PART = 'GET_PART'

/**
 * INITIAL STATE
 */
const initialState = {
    cars: [],
    parts: [],
    car: {},
    part: {},
    newCar: {},
    newPart: {}
}

/**
 * ACTION CREATORS
 */
const getCars = cars => ({type: GET_CARS, cars});
const getParts = parts => ({type: GET_PARTS, parts});
const getTheCar = car => ({type: GET_CAR, car});
const getThePart = part => ({type: GET_PART, part});
const postCar = newCar => ({ type: POST_CAR, newCar });
const postPart = newPart => ({ type: POST_PART, newPart });
export const updateCar = newCar => ({type: UPDATE_CAR, newCar});
export const updatePart = newPart => ({type: UPDATE_PART, newPart});

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

    export const getCar = id => dispatch => {
        axios
        .get(`/api/cars/${id}`)
        .then(res => res.data)
        .then((toDispatchCar) => {
            dispatch(getTheCar(toDispatchCar));
        });
    };
    export const getPart = id => dispatch => {
        axios
        .get(`/api/parts/${id}`)
        .then(res => res.data)
        .then((toDispatchPart) => {
            dispatch(getThePart(toDispatchPart));
        });
    };

    export const writeCar = car => dispatch => {
        axios
          .post('/api/cars', {
            description: car.description,
            name: car.name,
            classtypeId: car.classtypeId,
            parentId: car.parentId,
            views: car.views
          })
          .then(() => {
            dispatch(postCar(car));
          })
          .catch(err => console.error("Error", err));
      };
    export const writePart = part => dispatch => {
        axios
          .post("/api/parts", {
            description: part.description,
            name: part.name,
            classtypeId: part.classtypeId,
            parentId: part.parentId,
            views: part.views
          })
          .then(() => {
            dispatch(postPart(part));
          })
          .catch(err => console.error("Error", err));
      };

    export const postUpdateGetCars = car => dispatch => {
        axios
        .post('/api/cars', {
          description: car.description,
          name: car.name,
          classtypeId: car.classtypeId,
          parentId: car.parentId,
          views: car.views
        })
        .then(() => {
          dispatch(postCar(car));
        })
        .then(() => {
            dispatch(updateCar({}))
        })
        .then(() => {
            axios
            .get('/api/cars')
            .then(res => res.data)
            .then((toDispatchCars) => {
                dispatch(getCars(toDispatchCars));
            });
        })
        .catch(err => console.error("Error", err));
    }

    export const postUpdateGetParts = part => dispatch => {
        axios
        .post('/api/parts', {
          description: part.description,
          name: part.name,
          classtypeId: part.classtypeId,
          parentId: part.parentId,
          views: part.views
        })
        .then(() => {
          dispatch(postPart(part));
        })
        .then(() => {
            dispatch(updatePart({}));
        })
        .then(() => {
            axios
            .get('/api/parts')
            .then(res => res.data)
            .then((toDispatchParts) => {
                dispatch(getParts(toDispatchParts));
            });
        })
        .catch(err => console.error("Error", err));
    }

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
    return Object.assign({}, state, { cars: action.cars });
    case GET_PARTS:
    return Object.assign({}, state, { parts: action.parts});
    case GET_CAR:
    return Object.assign({}, state, { car: action.car });
    case GET_PART:
    return Object.assign({}, state, { part: action.part});
    case UPDATE_CAR:
    return Object.assign({}, state, { newCar: action.newCar});
    case UPDATE_PART:
    return Object.assign({}, state, { newPart: action.newPart});
    case POST_CAR:
    return Object.assign({}, state, {cars: state.cars.concat(action.newCar)});
    case POST_PART:
    return Object.assign({}, state, {parts: state.parts.concat(action.newPart)});
    
 
    default:
      return state
  }
}
