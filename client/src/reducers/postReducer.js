// Evaluate any actions that are committed - (fetching posts/creating new posts)
import { FETCH_POSTS, NEW_POST } from '../actions/types';

// Items: posts that come in from our action, where we have our fetch request
// Item: represent the new post we add
const initialState = {
    items: [],
    item: {}
}

// evaluates what action type we are dealing with and
export default function(state=initialState, action){
    switch(action.type) {
        case FETCH_POSTS:
            // we want to return the current state and the 'action.payload' we are getting from the action
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state;
    }
}