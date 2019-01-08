import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilteredBooks, clearFilteredBooks } from '../store'
import { getPublishYear } from '../utils-client'

class BooksSort extends Component {
    constructor () {
        super()
        this.state = {
            filterSelect: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            filterSelect: event.target.value
        })
    }
    
    handleSubmit (event) {
        event.preventDefault();
        //Make a copy of the books for sorting to avoid mutating the state
        const books = [...this.props.books]
        //Clear the previous filteredBooks in the state before executing books filter
        this.props.clearFilteredBooks()
        if (this.state.filterSelect === 'All') return;
        const filteredBooks = books.filter(book => book.first_publish_year === Number(this.state.filterSelect))
        this.props.setFilteredBooks(filteredBooks)
    }

    render () {
        const { books } = this.props
        const { filterSelect } = this.state
        const publishYears = getPublishYear(books)
        return (
            <form onSubmit={this.handleSubmit}>
                <select name='booksFilter' value={filterSelect} onChange={this.handleChange}>
                    <option value='All'>All</option>
                    {
                        publishYears.map((year, i) => {
                            return (
                                <option key={i} value={year}>Year {year}</option>
                            )
                        })
                    }
                </select>
                <input type="submit" value="Submit" />   
            </form>
        )
    }
}

const mapState = state => {
    return {
        books: state.books.books,
        filteredBooks: state.books.filteredBooks
    }
}

const mapDispatch = dispatch => {
    return {
      setFilteredBooks: (books) => dispatch(setFilteredBooks(books)),
      clearFilteredBooks: () => dispatch(clearFilteredBooks()) 
    }
}

export default connect (mapState, mapDispatch)(BooksSort)