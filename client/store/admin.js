import axios from 'axios'
import history from '../history'
import { updateCar } from './index';

/**
 * ACTION TYPES
 */
const GET_CLASS_TYPES = 'GET_CLASS_TYPES'
const UPDATE_CLASS_TYPE = 'UPDATE_CLASS_TYPE'
const POST_CLASS_TYPE = "POST_CLASS_TYPE";

/**
 * INITIAL STATE
 */
const initialState = {
    classTypes: [],
    newClassType: {},
}

/**
 * ACTION CREATORS
 */
const getClassTypes = classTypes => ({type: GET_CLASS_TYPES, classTypes});
const postClassType = newClassType => ({ type: POST_CLASS_TYPE, newClassType });
export const updateClassType = newClassType => ({type: UPDATE_CLASS_TYPE, newClassType});

/**
 * THUNK CREATORS
 */
    export const getAllClassTypes = () => dispatch => {
        axios
        .get('/api/admin')
        .then(res => res.data)
        .then((toDispatchClassTypes) => {
            dispatch(getClassTypes(toDispatchClassTypes));
        });
    };
    export const writeClassType = classType => dispatch => {
        axios
          .post("/api/admin", {
            className: classType.className
          })
          .then(() => {
            dispatch(postClassType(classType));
          })
          .catch(err => console.error("Error", err));
      };

    export const postUpdateGetClassTypes = classType => dispatch => {  
        axios
        .post("/api/admin", {
          className: classType.className
        })
        .then(() => {
          dispatch(postClassType(classType));
        })
        .then(() => {
            dispatch(updateClassType({}))
        })
        .then(() => {
            axios
            .get('/api/admin')
            .then(res => res.data)
            .then((toDispatchClassTypes) => {
                dispatch(getClassTypes(toDispatchClassTypes));
            });
        })
        .catch(err => console.error("Error", err));
    }
/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLASS_TYPES:
    return Object.assign({}, state, { classTypes: action.classTypes });
    case UPDATE_CLASS_TYPE:
    return Object.assign({}, state, { newClassType: action.newClassType});
    case POST_CLASS_TYPE:
    return Object.assign({}, state, {classTypes: state.classTypes.concat(action.newClassType)});
    default:
      return state
  }
}
