import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducer';

// Need this to use composeWithDevTools
const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;