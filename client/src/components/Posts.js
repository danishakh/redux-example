import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';      // connects our component to our redux store
import { fetchPosts } from '../actions/postActions';    // import our action

class Posts extends Component {

    // ============================
    // DON'T NEED THIS SHIT ANYMORE AS WE ARE DON'T NEED STATE - POSTS ARE COMING FROM REDUX, FROM THE APP STATE IN THE STORE
    // ============================

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          posts: []
    //     }
    // }

    // componentWillMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(data => {
        //         //console.log(data)
        //         this.setState({posts: data});
        // })
    // }
    
    // =============================


    componentDidMount() {
        // Bring all our posts through our fetchPosts action
        this.props.fetchPosts();
    }

    // Everytime our component receive a new property from state, this lifecycle method runs
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            // Add our new post to the start of our posts array
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </div>
        ))

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}


// Get the new 'posts' from state - get the state from redux and map it to props of our component
// This should give our component a 'this.props.posts' to work with
const mapStateToProps = state => ({
    posts: state.posts.items,       // 'state.posts' maps to the 'posts' in our rootReducer
    newPost: state.posts.item
})


// 1st Parenthesis -> 1st param - map our state to properties, 2nd param - fetchPosts function from 'actionPosts'
// 2nd Parenthesis -> our component duh...
//export default connect(null, { fetchPosts })(Posts);

// Once we created mapStateToProps() we need to pass it in our connect()
export default connect(mapStateToProps, { fetchPosts })(Posts);