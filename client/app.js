import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox from './components/SearchBox'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
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
    console.log('HIT')
    this.props.clearBook()
  }

  render() {
    const { books, singleBook } = this.props
    console.log('App.js', singleBook)
    return (
      <div>
        { 
          Object.keys(singleBook).length 
          ? <SingleBook singleBook={singleBook} clearBook={this.clearBook} />
          : (
            <div>
              <SearchBox />
              <Books books={books} pickBook={this.pickBook} />
            </div>
          )
        }
      </div>
    )
  }
}

//parameter state comes from client/index.js provider store state
const mapState = state => {
  console.log("STATE", state)
  return {
    books:state.books.books,
    singleBook: state.singleBook.singleBook,
    // isBooksPending: state.books.isBooksPending,
    // isSingleBookPending: state.singleBook.isSingleBookPending
  }
}

const mapDispatch = dispatch => {
  return {
    requestBook: (bookId) => dispatch(requestBook(bookId)),
    clearBook: () => dispatch(clearBook())
  }
}

export default connect(mapState, mapDispatch)(App)

