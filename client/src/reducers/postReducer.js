// Evaluate any actions that are committed - (fetching posts/creating new posts)
import { FETCH_POSTS, NEW_POST } from '../actions/types';

// Items: all posts that come in from our action, where we have our fetch request
// Item: represent the new post we add
const initialState = {
    items: [],
    item: {}
}

// evaluates the initial state and what action type we are dealing with
// action refers to the dispatch
export default function(state=initialState, action){
    switch(action.type) {
        case FETCH_POSTS:
            // we want to return the current state and the 'action.payload' we are getting from the action
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default: 
            return state;
    }
}