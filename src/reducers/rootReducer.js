/**
 * ************************************
 *
 * @description place to combine all reducers
 *
 * ************************************
 */

// import all reducers here
import {combineReducers} from 'redux';  
import lobbyReducer from './lobbyReducer';

const rootReducer = combineReducers({  
  // if we had other reducers, they would go here
  lobbyReducer
});

export default rootReducer;  