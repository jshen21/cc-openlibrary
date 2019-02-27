import axios from 'axios'
import { checkBookId } from '../utils-client'


/**
 * ACTION TYPES
 */
const REQUEST_BOOKS_PENDING = 'REQUEST_BOOKS_PENDING'
const REQUEST_BOOKS_SUCCESS = 'REQUEST_BOOKS_SUCCESS'
const REQUEST_BOOKS_FAILED = 'REQUEST_BOOKS_FAILED'
const SET_SORTSELECT = "SET_SORTSELECT"
const BOOKS_SORT = 'BOOKS_SORT'
const BOOKS_FILTER = 'BOOKS_FILTER'
const CLEAR_SORTEDBOOKS = 'CLEAR_SORTEDBOOKS'
const CLEAR_FILTEREDBOOKS = 'CLEAR_FILTEREDBOOKS'
const RESET_STATE = 'RESET_STATE'


/**
 * INITIAL STATE
 */
const defaultBooksState = {
    books: [],
    sortedBooks: [],
    sortSelect: '',
    filteredBooks: [],
    isBooksPending: false,
    error: ''
}

/**
 * ACTION CREATORS
 */
export const setRequestBooksPending = () => ({type: REQUEST_BOOKS_PENDING})
export const setRequestBooksSuccess = books => ({type: REQUEST_BOOKS_SUCCESS, books})
export const setRequestBooksFail = error => ({type: REQUEST_BOOKS_FAILED, error})
export const setSortSelect = sortSelect => ({type: SET_SORTSELECT, sortSelect})
export const setSortedBooks = books => ({type: BOOKS_SORT, books})
export const setFilteredBooks = books => ({type: BOOKS_FILTER, books})
export const clearSortedBooks = () => ({type: CLEAR_SORTEDBOOKS})
export const clearFilteredBooks = () => ({type: CLEAR_FILTEREDBOOKS})
export const resetState = () => ({type: RESET_STATE})

/**
 * THUNK CREATORS
 */
export const requestBooks = (searchSelect, searchInput) => async dispatch => {
    //Make sure the state is reset to default status before doing a new search
    dispatch(resetState())
    //When waiting for results to come back, update isPending to be true in order to render loading screen
    dispatch(setRequestBooksPending())
  try {
    const data = await axios.get(`/api/books?searchSelect=${searchSelect}&searchInput=${searchInput}`)
    /* BookID (ISBN/OCLC/LCCN/OLID) must be available in order to request singleBook details
    This filtering is to clearn up the data and exclude those results without BookID information
    before rendering the search results */
    const books = data.data.filter(book => checkBookId(book) !== false )
    /* It is a 304 on the server if no results are found, so I make validation check at this step
    and pass down error message as props to Books component in order to render the error message 
    when there is no search results. */
    if (books.length === 0) dispatch(setRequestBooksFail('Not Found'))
    else dispatch(setRequestBooksSuccess(books))
  } catch (error) {
    dispatch(setRequestBooksFail(error))
  }
}


/**
 * REDUCER
 */
export default function(state = defaultBooksState, action) {
  switch (action.type) {
    case REQUEST_BOOKS_PENDING:
        return {...state, isBooksPending: true}
    case REQUEST_BOOKS_SUCCESS:
        return {...state, books: action.books, isBooksPending: false}
    case REQUEST_BOOKS_FAILED:
        return {...state, error: action.error, isBooksPending: false}
    case SET_SORTSELECT:
        return {...state, sortSelect: action.sortSelect}
    case BOOKS_SORT:
        return {...state, sortedBooks: action.books}
    case BOOKS_FILTER:
        return {...state, filteredBooks: action.books}
    case CLEAR_SORTEDBOOKS:
        return {...state, sortedBooks: [], sortSelect: ''}
    case CLEAR_FILTEREDBOOKS:
        return {...state, filteredBooks: []}
    case RESET_STATE:
        return {...defaultBooksState}
    default:
        return state
  }
}
