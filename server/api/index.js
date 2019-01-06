const router = require('express').Router()
const axios = require('axios')
module.exports = router

//GET /api/books
router.get('/books', async (req, res, next) => {
  const searchSelect = req.query.searchSelect
  const searchInput = req.query.searchInput
  try {
    const response = await axios.get(`http://openlibrary.org/search.json?${searchSelect}=${searchInput}`)
    res.send(response.data.docs)
  } catch (err) {
    next(err)
  }
})

//GET /api/books/:bookId
router.get('/books/:bookId', async(req, res, next) => {
  const bookId = req.params.bookId
  try {
    const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=${bookId}&jscmd=details&format=json`)
    res.send(response.data)
  } catch (err) {
    next(err)
  }
})





router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
