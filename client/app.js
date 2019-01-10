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

    // This binding is necessary to make `this` work in the callback
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
    const { books, singleBook, sortedBooks, filteredBooks, error, isBooksPending, isSingleBookPending } = this.props
    return (
      <div>
        <h1 className='center' id='header'>Open Library</h1>
        { 
          isSingleBookPending
            ? <Loading /> 
            : (
              Object.keys(singleBook).length 
                ? <SingleBook singleBook={singleBook} clearBook={this.clearBook} />
                : (
                    <div>
                      <SearchBox />
                      <div className='center'>
                        <div className='center'>
                          <BooksSort />
                          <BooksFilter />
                        </div>
                      </div>
                      <div>
                      { 
                        //There are 3-step validations here in order to render the right component based on
                        //the state status
                        isBooksPending
                          ? <Loading />
                          : (sortedBooks.length
                              ? <Books books={sortedBooks} pickBook={this.pickBook} />
                              : (filteredBooks.length
                                  ? <Books books={filteredBooks} pickBook={this.pickBook} />
                                  : <Books books={books} error={error} pickBook={this.pickBook} />
                                )
                            )
                      }
                      </div>
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
    sortedBooks: state.books.sortedBooks,
    filteredBooks: state.books.filteredBooks,
    error: state.books.error,
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

//connect is a higher-order function that returns a higher-order component
//that is connected to the Redux store
export default connect(mapState, mapDispatch)(App)

