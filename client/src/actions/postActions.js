import { FETCH_POSTS, NEW_POST } from './types';

// each action or action creator will be a function that we need to export
export const fetchPosts = () => dispatch => {

    // thunk middleware allows us to call the dispatch function directly so we can make asynch requests
    
    // return function(dispatch) {      - checkout line 4 - ES6 brah!
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            
            // dispatch the data to postReducer
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
        }));
    //}
}