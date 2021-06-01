import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            content: ""
        }
    }
    render() {
        return (
            <form>
                <label>Name:</label>
                <input type="text" />
                <label>Review:</label>
                <input type="textarea"/>
            </form>
        )
    }
}
