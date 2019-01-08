import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSortedBooks } from '../store'

class BooksSort extends Component {
    constructor () {
        super()
        this.state = {sortSelect: ''}
        
        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange (event) {
        try {
            //Update component state whenever sortSelect changes, setState is asynchronous
            await this.setState({sortSelect: event.target.value})
            //Make a copy of the books for sorting to avoid mutating the state
            const books = [...this.props.books]
            const sortSelect = this.state.sortSelect
            //Sort books according to sortSelect at the state in descending order
            const sortedBooks = books.sort((a, b) => b[sortSelect] - a[sortSelect])
            this.props.setSortedBooks(sortedBooks)
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        const { sortSelect } = this.state
        return (
            <form>
                <label>
                    Sort by
                    <select name='booksSort' value={sortSelect} onChange={this.handleChange}>
                        <option value="">--</option>
                        <option value="edition_count">Number of Editions</option>
                        <option value="first_publish_year">Published Year</option>
                    </select>
                </label>
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