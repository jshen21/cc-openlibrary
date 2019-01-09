import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox from './components/SearchBox'
import BooksSort from './components/BooksSort'
import BooksFilter from './components/BooksFilter'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Loading from './components/Loading'

import { requestBook, clearBook } from './store'

class App extends Component {
  constructor () {
    super()
    this.pickBook = this.pickBook.bind(this)
    this.clearBook = this.clearBook.bind(this)
  }

  pickBook (bookId) {
    this.props.requestBook(bookId)
  }

  clearBook (event) {
    this.props.clearBook()
  }

  render() {
    const { books, singleBook, filteredBooks, isBooksPending, isSingleBookPending } = this.props
    return (
      <div>
        <h1 id='header'>Open Library</h1>
        { 
          isSingleBookPending
            ? <Loading /> 
            : (
              Object.keys(singleBook).length 
                ? <SingleBook singleBook={singleBook} clearBook={this.clearBook} />
                : (
                    <div>
                      <div className='center'>
                        <SearchBox />
                      </div>
                      <div className='center'>
                          <BooksSort />
                          <BooksFilter />
                      </div>
                      { 
                        isBooksPending && <Loading />
                      }
                      {
                        filteredBooks.length 
                        ? <Books books={filteredBooks} pickBook={this.pickBook} />
                        : <Books books={books} pickBook={this.pickBook} /> 
                      }
                    </div>
                  )
              )
        }
      </div>
    )
  }
}

//parameter state comes from client/index.js provider store state
const mapState = state => {
  return {
    books:state.books.books,
    singleBook: state.singleBook.singleBook,
    filteredBooks: state.books.filteredBooks,
    isBooksPending: state.books.isBooksPending,
    isSingleBookPending: state.singleBook.isSingleBookPending
  }
}

const mapDispatch = dispatch => {
  return {
    requestBook: (bookId) => dispatch(requestBook(bookId)),
    clearBook: () => dispatch(clearBook())
  }
}

export default connect(mapState, mapDispatch)(App)

