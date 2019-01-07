import axios from 'axios'


/**
 * ACTION TYPES
 */
const REQUEST_BOOKS_PENDING = 'REQUEST_BOOKS_PENDING'
const REQUEST_BOOKS_SUCCESS = 'REQUEST_BOOKS_SUCCESS'
const REQUEST_BOOKS_FAILED = 'REQUEST_BOOKS_FAILED'
const BOOKS_SORT = 'BOOKS_SORT'


/**
 * INITIAL STATE
 */
const defaultBooksState = {
    books: [],
    isBooksPending: true
}

/**
 * ACTION CREATORS
 */
const setRequestBooksPending = () => ({type: REQUEST_BOOKS_PENDING})
const setRequestBooksSuccess = books => ({type: REQUEST_BOOKS_SUCCESS, books})
const setRequestBooksFail = error => ({type: REQUEST_BOOKS_FAILED, error})
export const setSortedBooks = books => ({type: BOOKS_SORT, books})

/**
 * THUNK CREATORS
 */
export const requestBooks = (searchSelect, searchInput) => async dispatch => {
    dispatch(setRequestBooksPending)
  try {
    const data = await axios.get(`/api/books?searchSelect=${searchSelect}&searchInput=${searchInput}`)
    dispatch(setRequestBooksSuccess(data.data))
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
        return {...state, error: action.error}
    case BOOKS_SORT:
        return {...state, books: action.books}
    default:
        return state
  }
}
