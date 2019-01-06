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




router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
