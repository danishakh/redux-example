// separate store file to take care of all store functions

import { createStore, applyMiddleware, compose } from 'redux';
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
// 3. enhancer - functions we want to include such as middleware
const store = createStore(
    rootReducer, 
    initialState,
    compose(                // this will take care of our multiple enhancers
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // Chrome Redux Extension
    )
);

export default store;