const router = require('express').Router()
const searchTask = require('../controllers/searchTask.js')

router
  .route('/:s')
  .get(searchTask.GET)


module.exports = router