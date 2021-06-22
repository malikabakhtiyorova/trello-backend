const router = require('express').Router()
const tasksByCategory = require('../controllers/tasksByCategory.js')

router
  .route('/')
  .get(tasksByCategory.GET)
 

module.exports = router