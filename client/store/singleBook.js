import axios from 'axios'


/**
 * ACTION TYPES
 */
const REQUEST_BOOK_PENDING = 'REQUEST_BOOK_PENDING'
const REQUEST_BOOK_SUCCESS = 'REQUEST_BOOK_SUCCESS'
const REQUEST_BOOK_FAILED = 'REQUEST_BOOK_FAILED'
const CLEAR_BOOK = 'CLEAR_BOOK'


/**
 * INITIAL STATE
 */
const defaultSingleBookState = {
    singleBook: {},
    isSingleBookPending: true
}

/**
 * ACTION CREATORS
 */
const setRequestBookPending = () => ({type: REQUEST_BOOK_PENDING})
const setRequestBookSuccess = book => ({type: REQUEST_BOOK_SUCCESS, book})
const setRequestBookFail = error => ({type: REQUEST_BOOK_FAILED, error})
export const clearBook = () => ({type: CLEAR_BOOK})

/**
 * THUNK CREATORS
 */
export const requestBook = (bookId) => async dispatch => {
    dispatch(setRequestBookPending)
  try {
    const data = await axios.get(`/api/books/${bookId}`)
    console.log("DATA", data.data[bookId].details)
    dispatch(setRequestBookSuccess(data.data[bookId].details))
  } catch (error) {
    dispatch(setRequestBookFail(error))
  }
}


/**
 * REDUCER
 */
export default function(state = defaultSingleBookState, action) {
  switch (action.type) {
    case REQUEST_BOOK_PENDING:
        return {...state, isSingleBookPending: true}
    case REQUEST_BOOK_SUCCESS:
        return {...state, singleBook: action.book, isSingleBookPending: false}
    case REQUEST_BOOK_FAILED:
        return {...state, error: action.error}
    case CLEAR_BOOK:
        return {...state, singleBook: {}}
    default:
        return state
  }
}
