import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBox from './components/SearchBox'
import Books from './components/Books'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    const { books } = this.props
    return (
      <div>
        <h1>SEARCH YOUR FAVORIATE BOOK:</h1>
        <SearchBox />
        { books.length && 
          <Books books={books}/>
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
    isPending: state.books.isPending
  }
}

//dispatch the DOM changes to call an action, the function returns an object then uses connect to change the data from reducer
const mapDispatch = dispatch => {
  return {
    onRequestBooks: (searchSelect, searchInput) => dispatch(requestBooks(searchSelect, searchInput))
  }
}

export default connect(mapState, mapDispatch)(App)

