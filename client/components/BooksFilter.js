import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilteredBooks, clearSortedBooks, clearFilteredBooks } from '../store'
import { getPublishYear } from '../utils-client'

class BooksSort extends Component {
    constructor () {
        super()
        this.state = {filterSelect: ''}

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange (event) {
        try {
            //Update component state whenever filterSelect changes, setState is asynchronous
            await this.setState({filterSelect: event.target.value})
            //Make a copy of the books for sorting to avoid mutating the state
            const books = [...this.props.books]
            //Clear the previous filteredBooks in the state before executing a filtering action
            this.props.clearFilteredBooks()
            this.props.clearSortedBooks()
            if (this.state.filterSelect === 'All') return;
            const filteredBooks = books.filter(book => book.first_publish_year === Number(this.state.filterSelect))
            this.props.setFilteredBooks(filteredBooks)
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        const { books } = this.props
        const { filterSelect } = this.state
        const publishYears = getPublishYear(books)
        return (
            <form className='br3 mt1 pa2 center ml1'>
                {/* <label>
                    Filter by */}
                    <select  className='pt0 pa2 ba shadow-5 b-gray selectWidth' name='booksFilter' value={filterSelect} onChange={this.handleChange}>
                        <option value="" disabled hidden>Filter By ...</option>
                        <option value='All'>All</option>
                        {
                            publishYears.map((year, i) => {
                                return (
                                    <option key={i} value={year}>Year {year}</option>
                                )
                            })
                        }
                    </select>
                {/* </label> */}
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
      clearSortedBooks: () => dispatch(clearSortedBooks()),
      clearFilteredBooks: () => dispatch(clearFilteredBooks()) 
    }
}

export default connect (mapState, mapDispatch)(BooksSort)