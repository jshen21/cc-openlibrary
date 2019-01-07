import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSortedBooks } from '../store'

class BooksSort extends Component {
    constructor () {
        super()
        this.state = {
            sortSelect: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            sortSelect: event.target.value
        })
    }
    
    handleSubmit (event) {
        event.preventDefault();
        //Make a copy of the books for sorting to avoid mutating the state
        const books = [...this.props.books]
        console.log("BOOKS", books)
        const sortSelect = this.state.sortSelect
        const sortedBooks = books.sort((a, b) => b[sortSelect] - a[sortSelect])
        console.log("afterBOOKS", sortedBooks)
        this.props.setSortedBooks(sortedBooks)
    }

    render () {
        const { sortSelect } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <select name='booksSort' value={sortSelect} onChange={this.handleChange}>
                    <option value="">--</option>
                    <option value="edition_count">Number of Editions</option>
                    <option value="first_publish_year">Published Year</option>
                </select>
                <input type="submit" value="Submit" />   
            </form>
        )
    }
}

const mapState = state => {
    return {
        books: state.books.books
    }
}

const mapDispatch = dispatch => {
    return {
      setSortedBooks: (books) => dispatch(setSortedBooks(books)) 
    }
}

export default connect (mapState, mapDispatch)(BooksSort)