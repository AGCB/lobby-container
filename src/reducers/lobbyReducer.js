/**
 * ************************************
 *
 * @module  marketsReducer
 * @description reducer for lobby 
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {};

const lobbyReducer = (state = initialState, action) => {
  console.log('Action Payload', action.payload)
  
  switch(action.type) {

    case types.UPDATE_RATING:
      const rating = {
        value: action.payload
      }
    return {
      ...state,
      rating
    };

    case types.UPDATE_COURSE:
      const course = {
        value: action.payload
      }
    return {
      ...state,
      course
    };



    default:
      return state;

  }
}

export default lobbyReducer;