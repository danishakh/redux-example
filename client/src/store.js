// separate store file to take care of all store functions

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// Initial state of your application
const initialState = {};

// Array of middleware we are going to use
const middleware = [thunk];

// createStore takes 3 args
// 1. rootReducer -  which has the list of all our reducers based on our resources. eg: postReducer/authReducer/todoReducer
//    Combine all of them to a rootReducer which is passed to the store
// 2. initial state -  of the application
// 3. enhancer - functions we want to include
const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
);

export default store;