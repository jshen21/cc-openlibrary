import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox from './components/SearchBox'
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import { requestBook } from './store'

class App extends Component {
  constructor () {
    super()
    this.pickBook = this.pickBook.bind(this)
  }

  pickBook (bookId) {
    this.props.requestBook(bookId)
  }

  render() {
    const { books, singleBook } = this.props
    return (
      <div>
        <h1>SEARCH YOUR FAVORIATE BOOK:</h1>
        <SearchBox />
        { books.length && 
          <Books books={books} pickBook={this.pickBook} />
        }
        { singleBook.title &&
        <p>Got the book</p>
          // <SingleBook singleBook={singleBook} />
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
    requestBook: (bookId) => dispatch(requestBook(bookId)) 
  }
}

export default connect(mapState, mapDispatch)(App)

