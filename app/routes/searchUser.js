const router = require('express').Router()
const searchUser = require('../controllers/searchUser.js')

router
  .route('/:s')
  .get(searchUser.GET)


module.exports = router