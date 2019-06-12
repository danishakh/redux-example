import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {

    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.state = {
            title: "",
            body: ""
        }
    }

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler = e => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(post),
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        this.props.createPost(post);
    }
    
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>Title: </label><br />
                        <input name="title" type="text" value={this.state.title} onChange={this.onChangeHandler} />
                    </div>
                    <br />
                    <div>
                        <label>Post Body: </label><br />
                        <textarea name="body" type="text" value={this.state.body} onChange={this.onChangeHandler} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTyes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)