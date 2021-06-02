import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import addReview from '../actions/addReview'
import '../stylesheets/review-form.css'

class CommentForm extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            content: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const review = {name: this.state.name, content: this.state.content, anime_id: this.props.history.location.pathname.split("/animes/")[1]}
        this.props.addReview(review)
        this.setState({
            name: "",
            content: ""
        })
    }

    handleChange = event => {this.setState( {[event.target.name]: event.target.value } ) }

    render() {
        return (
            <form className="center" onSubmit={this.handleSubmit}>
                <p className="label">Name</p>
                <input type="text" className="name-box" name="name" value={this.state.name} onChange={this.handleChange}/> 
                <br/><br/>
                <p className="label">Review</p>
                <textarea type="text" className="content-box" rows="20" cols="150" name="content" value={this.state.content} onChange={this.handleChange}/>
                <br/><br/>
                <input type="submit" value="Submit Review" className="button"/>
            </form>
        )
    }
}

export default withRouter(connect(null, {addReview})(CommentForm))