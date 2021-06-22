const router = require('express').Router()
const UsersTask = require('../controllers/UsersTask')

router
  .route('/')
  .get(UsersTask.GET)
 

module.exports = router