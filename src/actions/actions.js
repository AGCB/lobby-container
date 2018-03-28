
// add action type constants 
// i.e.export const ACTION_DESCRIPTION = "ACTION_DESCRIPTION";
import * as types from '../constants/actionTypes'

const updateRating = (num) => ({
  type: types.UPDATE_RATING,
  payload: num,
});

const updateCourse = (str) => ({
  type: types.UPDATE_COURSE,
  payload: str,
});


module.exports = {
  updateRating,
  updateCourse
};