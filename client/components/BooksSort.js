import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSortSelect, setSortedBooks } from '../store'

class BooksSort extends Component {
    constructor () {
        super() 
        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange (event) {
        try {
            //Update state in Redux store whenever sortSelect changes, action creator call is asynchronous
            await this.props.setSortSelect(event.target.value)
            //Make a copy of the books for sorting to avoid mutating the state
            const books = this.props.filteredBooks.length? [...this.props.filteredBooks]:[...this.props.books]
            const sortSelect = this.props.sortSelect
            //Sort books according to sortSelect value at the state in descending order
            const sortedBooks = books.sort((a, b) => b[sortSelect] - a[sortSelect])
            this.props.setSortedBooks(sortedBooks)
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        const { sortSelect } = this.props
        return (
            <form className='br3 mt1 pa2 center mr1'>
                <select  
                    className='pt0 pa2 ba shadow-5 b-gray selectWidth' 
                    name='booksSort' 
                    value={sortSelect} 
                    onChange={this.handleChange}>
                        <option className='selectPlaceholder' value="" disabled hidden>Sort by ...</option>
                        <option value="edition_count">Number of Editions</option>
                        <option value="first_publish_year">Published Year</option>
                </select>
            </form>
        )
    }
}

const mapState = state => {
    return {
        books: state.books.books,
        sortedBooks: state.books.sortedBooks,
        sortSelect: state.books.sortSelect,
        filteredBooks: state.books.filteredBooks
    }
}

const mapDispatch = dispatch => {
    return {
      setSortedBooks: (books) => dispatch(setSortedBooks(books)),
      setSortSelect: (sortSelect) => dispatch(setSortSelect(sortSelect))
    }
}

//connect is a higher-order function that returns a higher-order component
//that is connected to the Redux store
export default connect (mapState, mapDispatch)(BooksSort)