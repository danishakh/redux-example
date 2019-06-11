import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

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


    componentWillMount() {
        this.props.fetchPosts();
    }
    

    render() {
        const postItems = this.state.posts.map(post => (
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

// 1st set of parenthesis
// 1st arg - map our state to properties, 2nd arg - fetchPosts function from 'actionPosts'
export default connect(null, { fetchPosts })(Posts);