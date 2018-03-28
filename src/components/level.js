import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import updateRating from './../actions/actions'

const mapStateToProps = store => {
  console.log(store);
  return {
    lobby: store
  }
};

const mapDispatchToProps  = dispatch => {
  // create functions that will dispatch action creators
  return {
    update: (e) => {
      dispatch(actions.updateRating(e.target.value))
    },
    updateCourse: (e) => {
      dispatch(actions.updateCourse(e.target.value))
    }
  }
}


const level = (props) => {
  return (
    <div>
      <select onChange={props.update}>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
        <option value="4">Level 4</option>
      </select>

      <select onChange={props.updateCourse}>
        <option value="Callbacks">Callbacks</option>
        <option value="Closures">Closures</option>
        <option value="Async">Async</option>
        <option value="OOP">OOP</option>
      </select>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(level);