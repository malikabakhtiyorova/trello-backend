const router = require('express').Router()
const commentsByTask = require('../controllers/commentsByTask.js')

router
  .route('/')
  .get(commentsByTask.GET)
 

module.exports = router