import React, { Component } from 'react'

export default class Postform extends Component {

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
