import axios from 'axios'


/**
 * ACTION TYPES
 */
const REQUEST_BOOK_PENDING = 'REQUEST_BOOK_PENDING'
const REQUEST_BOOK_SUCCESS = 'REQUEST_BOOK_SUCCESS'
const REQUEST_BOOK_FAILED = 'REQUEST_BOOK_FAILED'


/**
 * INITIAL STATE
 */
const defaultSingleBookState = {
    singleBook: {},
    isPending: true
}

/**
 * ACTION CREATORS
 */
const setRequestBookPending = () => ({type: REQUEST_BOOK_PENDING})
const setRequestBookSuccess = book => ({type: REQUEST_BOOK_SUCCESS, book})
const setRequestBookFail = error => ({type: REQUEST_BOOK_FAILED, error})

/**
 * THUNK CREATORS
 */
export const requestBook = (bookId) => async dispatch => {
    dispatch(setRequestBookPending)
  try {
    const data = await axios.get(`/api/books/${bookId}`)
    dispatch(setRequestBookSuccess(data.data))
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
        return {...state, isPending: true}
    case REQUEST_BOOK_SUCCESS:
        return {...state, singleBook: action.book, isPending: false}
    case REQUEST_BOOK_FAILED:
        return {...state, error: action.error}
    default:
        return state
  }
}
